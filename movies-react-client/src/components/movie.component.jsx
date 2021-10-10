import React, { Component } from "react";
import { getMovies } from '../services/movies.service';
class Movie extends Component {
    state = {
        movies: getMovies().map((movie,idx) => ({...movie, id: `movie-${idx}`}))
    }
    findMovie = (id) =>{
        return this.state.movies.find(movie => movie.id === id);
    }
  render() {
      const movie = this.findMovie(this.props.match.params.id);
    return (
        <div>
            {JSON.stringify(movie)}
        </div>
    )
  }
}
export default Movie;