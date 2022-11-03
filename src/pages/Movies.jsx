import { MoviesList } from "components/MoviesList";
import { SearchBox } from "components/SearchBox";


export const Movies = () => { 
    return (
        <div>
            <SearchBox />
            <MoviesList />
           
        </div>

    )
}