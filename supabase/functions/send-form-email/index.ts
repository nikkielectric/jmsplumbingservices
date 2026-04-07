import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3.25.76'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const FormSchema = z.object({
  formSource: z.string().min(1).max(100),
  name: z.string().min(1).max(100),
  phone: z.string().max(20).optional().default(''),
  email: z.string().max(255).optional().default(''),
  cityZip: z.string().max(100).optional().default(''),
  service: z.string().max(200).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  hearAbout: z.string().max(200).optional().default(''),
  issue: z.string().max(200).optional().default(''),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const parsed = FormSchema.safeParse(body)
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'Invalid form data', details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = parsed.data

    // Store in database using service role
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    const { error: dbError } = await supabase.from('form_submissions').insert({
      form_source: data.formSource,
      name: data.name,
      phone: data.phone,
      email: data.email,
      city_zip: data.cityZip,
      service: data.service,
      message: data.message,
      hear_about: data.hearAbout,
      issue: data.issue,
    })

    if (dbError) {
      console.error('Database insert error:', dbError)
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('Unexpected error:', err)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
