
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_source TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT DEFAULT '',
  email TEXT DEFAULT '',
  city_zip TEXT DEFAULT '',
  service TEXT DEFAULT '',
  message TEXT DEFAULT '',
  hear_about TEXT DEFAULT '',
  issue TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow edge functions to insert submissions"
  ON public.form_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Allow edge functions to read submissions"
  ON public.form_submissions
  FOR SELECT
  TO service_role
  USING (true);
