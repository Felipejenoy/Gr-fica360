import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzibakoksuhkmxdycylf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aWJha29rc3Voa214ZHljeWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTEyMjAsImV4cCI6MjA3NTg2NzIyMH0.avHYc4uKLlkCy9ai1q785BlkNQT9wD50eIATv3Hx73w"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
