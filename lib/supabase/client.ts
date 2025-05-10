// utils/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase credentials
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);
