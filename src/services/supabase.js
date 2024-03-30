import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const supabaseUrl = "https://eixqmhckwboagzqdocvj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpeHFtaGNrd2JvYWd6cWRvY3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDgyNDQsImV4cCI6MjAyNzM4NDI0NH0.iqdGjVsLIWH5jdYC_ZCGg0Xb5atPkGtjX104knEYzTU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
