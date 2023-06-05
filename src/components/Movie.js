import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";

function Movie({movie}){
    return <div  className={styles.movie}  key={movie.id}>
      <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={'movie/'+movie.id}>{movie.title}</Link>
      </h2>
      <p>{movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
    ;
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired
}

export default Movie