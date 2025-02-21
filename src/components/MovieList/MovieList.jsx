import './MovieList.scss';
import {MovieCard} from '../MovieCard/MovieCard';
import moviesFromServer from "../../api/movies.json";

export const MovieList = () => 
<>
    <div className="movies">
        {moviesFromServer.map(movie => (
            <div className="card" data-cy="Movie" key={movie.imdbId}>
                <MovieCard movie={movie}/>
            </div>
        ))}
    </div>
</>;
