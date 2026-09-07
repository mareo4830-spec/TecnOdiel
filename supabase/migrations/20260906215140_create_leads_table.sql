/*
# Create leads table for TecnOdiel contact form

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — client's name
  - `email` (text, not null) — client's email
  - `phone` (text) — optional phone number
  - `business_type` (text) — type of business (e.g. ecommerce, services, restaurant)
  - `goals` (text[]) — selected goals (seo, web design, traffic, maintenance)
  - `budget` (text) — budget range
  - `message` (text) — project description
  - `status` (text, default 'new') — lead status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `leads`.
- Allow anon + authenticated INSERT only (public contact form, no sign-in).
- No SELECT/UPDATE/DELETE for anon (leads are private to the agency owner).
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  business_type text,
  goals text[],
  budget text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);
