import React, { Component } from 'react';
import { getGenres, getMovies } from '../services/movies.service';
import Filter from '../common/filtering.component';
import Pagination from './pagination.component';
import MoviesTable from './movies-table.component';
class Movies extends Component {
    state = {
        movies: getMovies(),
        genres: [{ name: 'All Genres' }, ...getGenres()],
        selectedGenre: 'All Genres',
        activePage: 1,
        dataCount: 10,
        currentItems: [],
        sortColumn: { path: 'title', order: 'asc' }

    }
    setActivePage = (page) => {
        this.setState({ activePage: page });
    }
    paginateMovies = (movies) => {
        const { activePage, dataCount } = this.state;
        const start = (activePage - 1) * dataCount;
        const updatedMovies = movies.slice(start, start + dataCount);
        return updatedMovies;
    }

    filterMovies = () => {
        const { movies, selectedGenre } = this.state;
        const filteredMovies = movies.filter(
            movie => {
                if (selectedGenre === 'All Genre') return true;
                if (movie.genres.includes(selectedGenre)) return true;
                return false;
            });
        return filteredMovies;
    }
    handleClickGenre = (name) => {
        this.setState({ selectedGenre: name, activePage: 1 });

    }
    handleSort = (sortColumn) => {
        this.setState({ ...this.state, sortColumn });
    }
    render() {
        const filtered = this.filterMovies();
      //  const sort = this.handleSort();
        const movies = this.paginateMovies(filtered);
        return (
            <>
                <div className="row">
                    <div className="col-lg-2">
                        <Filter
                            filteredItems={this.state.genres.map((genre, idx) => ({ _id: idx, name: genre.name }))}
                            selectwedItem={this.state.selectedGenre}
                            onClick={this.handleClickGenre}
                        />
                    </div>
                    <div className="col-lg-8">
                        <h1>Showing {filtered.length} Movies</h1>
                        <br />
                        <MoviesTable
                            movies={movies}
                            onSort={this.handleSort}
                        />
                        <Pagination
                            totalItems={filtered.length}
                            pageCount={this.state.dataCount}
                            activePage={this.state.activePage}
                            setActivePage={this.setActivePage}
                        />
                    </div>
                </div>
            </>
        );
    }

}
export default Movies;