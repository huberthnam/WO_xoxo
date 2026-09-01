import { createClient } from "@supabase/supabase-js";
const url=import.meta.env.VITE_SUPABASE_URL||"https://lmjpjkfkbpvbvrahgrth.supabase.co";
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY||"sb_publishable_L-Dqm-IPOXHJS_d5_IPg5w_ACjTa0eL";
export const supabase=createClient(url,key);
