import { fetchTrendMovies } from "ApiService";

export const Home = () => {

fetchTrendMovies().then((response) => {
    return response.data.results;
  });
  return (
    <div>
      <ul>
        <li>
          <a href="">
            
          </a>
       </li>
    
      </ul>
  </div>
)
};