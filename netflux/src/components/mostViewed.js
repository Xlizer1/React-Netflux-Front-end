import React from "react";
import MovieGrid from './MovieGrid'
import { mostViewet } from '../utils/helper';

const MostViewed = (props) => {

    return (
        <MovieGrid 
            title= "الاكثر مشاهدة" 
            GridType="is-suggested"
            movies = {mostViewet(props.movies)}
            limit={4}
        />
    )
}

export default MostViewed;