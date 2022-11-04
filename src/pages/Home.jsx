import { fetchTrendMovies } from "ApiService";

export const Home =  () => {

  const TrendMovies = fetchTrendMovies();
  // console.log(TrendMovies.data.results);
  
  return (
    <div>
      {/* <ul>{response.data.results.map((movie) => { 
        <li key={movie.id}>
          <a href="">{ movie.title}</a>
        </li>
      })}</ul> */}
    </div>
  );
};