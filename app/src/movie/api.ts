const API_KEY = '12c5a108444b39c3043eaa1e034575e0';
import axios from 'axios';

export async function fetchMovies(title: string, page = 1) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        title,
      )}&page=${page}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    // handle errors ( not really sure what values are possible here ...)
    return {results: []};
  }
}
