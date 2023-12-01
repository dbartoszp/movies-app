import supabase from '../../services/supabase.js';

const addMovie = async (newMovie) => {
	try {
		const { error } = await supabase.from('Movies').insert([{}]).select();
		console.log(error);
	} catch (err) {
		console.log(err);
	}
};

const seedMovies = async ()=>{
    try{
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`)
    }
}