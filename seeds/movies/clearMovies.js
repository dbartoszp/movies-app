import supabase from '../../services/supabase.mjs';

const clearMovies = async () => {
  const { error } = await supabase.from('Movies').delete().neq('id', -1);
};

await clearMovies();
