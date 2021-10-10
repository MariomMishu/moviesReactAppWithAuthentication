import React from 'react';
import Table from '../common/table.component';
const MoviesTable = ({ movies, onSort}) => {
    const columns=[
        {path:'posterurl', label:'PostUrl', content: movie => <td><img alt='' style={{height:'auto', width:'40px'}} src={movie.posterurl}/></td>},
        {path:'title',label:'Title', content: movie => <td>{movie.title}</td>},
        {path:'imdbRating',label:'Rating', content: movie => <td>{movie.imdbRating}</td>},
        {path:'your_rating',label:'Your Rating', content: movie => <td>{movie.your_rating ? <i class="bi bi-star-fill"/>: <i class="bi bi-star"/>}</td>}
];
    return (
        <Table items = {movies} columns = {columns} onSort={onSort}/>
       
    )
};
export default MoviesTable;