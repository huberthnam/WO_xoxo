# Four Friends Workout

A minimal shared workout tracker for Nam, Neel, Mei, and Jayz. Built with React, Vite, and Supabase.

## Supabase setup

1. Open the Supabase SQL Editor.
2. Run `supabase/schema.sql` once.

## Vercel deployment

Import this repository in Vercel. The included defaults point to the intended Supabase project. For explicit configuration, add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in Vercel project settings.

The publishable key is safe to use in frontend code. Never commit the database password or service-role key.
