const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}
import { z } from 'npm:zod@3.25.76'

const RECIPIENT_EMAIL = 'Jmsplumbingservicesllc@gmail.com'

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

    // Build a clean HTML email with all submitted fields
    const fields: [string, string][] = [
      ['Form Source', data.formSource],
      ['Name', data.name],
      ['Phone', data.phone],
      ['Email', data.email],
      ['City / Zip', data.cityZip],
      ['Service Needed', data.service],
      ['Issue', data.issue],
      ['How They Heard About Us', data.hearAbout],
      ['Message / Description', data.message],
    ].filter(([_, val]) => val && val.trim() !== '') as [string, string][]

    const rowsHtml = fields
      .map(([label, value]) => `
        <tr>
          <td style="padding:10px 14px;font-weight:bold;color:#1a3a2a;border-bottom:1px solid #e5e5e5;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;color:#333;border-bottom:1px solid #e5e5e5;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`)
      .join('')

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1a3a2a;padding:20px 24px;border-radius:8px 8px 0 0;">
          <h1 style="margin:0;color:#c8a96e;font-size:20px;">New Lead from JMS Plumbing Website</h1>
          <p style="margin:4px 0 0;color:#a0b8a8;font-size:13px;">${escapeHtml(data.formSource)}</p>
        </div>
        <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">
          <table style="width:100%;border-collapse:collapse;">
            ${rowsHtml}
          </table>
        </div>
        <p style="color:#999;font-size:11px;margin-top:16px;text-align:center;">
          This message was sent from jmsplumbingservices.com
        </p>
      </div>
    `

    const subject = `New Lead: ${data.name} — ${data.formSource}`

    // Send via Resend (free tier allows sending to your own email)
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'JMS Plumbing Website <onboarding@resend.dev>',
        to: [RECIPIENT_EMAIL],
        subject,
        html,
      }),
    })

    if (!emailRes.ok) {
      const errText = await emailRes.text()
      console.error(`Resend API error [${emailRes.status}]: ${errText}`)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
