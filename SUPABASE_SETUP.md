# Supabase Setup Instructions

## Step 1: Get Your Supabase Credentials

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Select your project (or create a new one)
3. Go to **Project Settings** > **API**
4. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## Step 2: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   \`\`\`

## Step 3: Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy the contents of `scripts/create-design-requests-table.sql`
4. Paste and click **Run**

This will create the `design_requests` table with:
- `id` (UUID, primary key)
- `name` (text, required)
- `email` (text, required)
- `project_type` (text, optional)
- `budget` (text, optional)
- `description` (text, required)
- `timeline` (text, optional)
- `status` (text, default: 'pending')
- `created_at` (timestamp)

## Step 4: Test the Integration

1. Restart your development server
2. Fill out the contact form on your website
3. Check your Supabase dashboard under **Table Editor** > **design_requests**
4. You should see the new submission!

## Security Notes

- Row Level Security (RLS) is enabled
- Anyone can submit requests (INSERT)
- Only authenticated users can view requests (SELECT)
- Consider adding authentication for an admin dashboard to view submissions
