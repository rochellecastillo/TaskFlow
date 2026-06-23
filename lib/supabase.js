import { createClient } from "@supabase/supabase-js";
//const SUPABASE_URL = "https://xcqrccjwbkneqfdrmavo.supabase.co/rest/v1/";
const SUPABASE_URL = "https://xcqrccjwbkneqfdrmavo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_2Fa_IPmnJVy7smwu5rbnYw_vUjyf3d2";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
