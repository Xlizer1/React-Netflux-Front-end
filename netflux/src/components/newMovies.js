import React from "react";
import MovieGrid from './MovieGrid';
import { recentRelease } from '../utils/helper';

const NewMovies = (props) => {
    
    return (
        <MovieGrid 
            title= "احدث الافلام" 
            GridType="is-suggested"
            movies = {recentRelease(props.movies, 'Film')}
            limit={8}
        />
    )
}

export default NewMovies;