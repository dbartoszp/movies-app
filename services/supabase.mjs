import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = 'https://ctmrfwfuspkzlnxegohw.supabase.co';
// const supabaseKey =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bXJmd2Z1c3BremxueGVnb2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzA5NzcsImV4cCI6MjAxNzAwNjk3N30.NFUXyaznDatBYIXNS59pquOk9SrMDXwYVBP27LqPIfg';
const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
export default supabase;
