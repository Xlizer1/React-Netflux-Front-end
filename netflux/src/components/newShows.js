import React from "react";
import MovieGrid from './MovieGrid'
import { recentRelease } from '../utils/helper'

const NewShows = (props) => {
    
    return (
        <MovieGrid 
            title= "احدث المسلسلات" 
            GridType="is-suggested"
            movies = {recentRelease(props.movies, 'Film')}
            limit={8}
        />
    )
}

export default NewShows;