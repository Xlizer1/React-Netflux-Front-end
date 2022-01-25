import React from "react";
import Filter from "../components/Filter";
import MovieGrid from "../components/MovieGrid";

import { suggested, mostViewet, recentRelease } from '../utils/helper'

class CategoryPage extends React.Component{
    state = {
        filter: null,
    }

    onFilter = value => {
        this.setState({filter: value});
    }

    renderMovieGrid = () => {
        return (
            <>
                <MovieGrid 
                    title= "اقتراحنا لك" 
                    GridType="is-suggested"
                    movies = { suggested(this.props.movies) }
                    limit={4}
                />
                <MovieGrid 
                    title= "الاكثر مشاهدة" 
                    GridType="is-suggested"
                    movies = { mostViewet(this.props.movies) }
                    limit={4}
                />
                <MovieGrid 
                    title= {`احدث ${this.props.typeText}`} 
                    GridType="is-suggested"
                    movies = { recentRelease(this.props.movies, "Film") }
                    limit={32}
                />
            </>
        )
    }

    renderFilterResult = () => {
        const filteredMovies = this.props.movies.filter(movie => {
            return movie.genres.includes(this.state.filter)
        })
        return (
            <MovieGrid 
                    title= {this.state.filter} 
                    GridType="is-suggested"
                    movies = { filteredMovies }
            />
        )
    }

    render() {
        return(
            <>
                <Filter type={this.props.typeText} optionText={this.props.optionText} onSelectChange = {this.onFilter}/>
                {this.state.filter ? this.renderFilterResult() : this.renderMovieGrid() }
            </>
        )
    }
}

export default CategoryPage;