import React from "react";
import MovieGrid from "../components/MovieGrid";

class SearchPage extends React.Component{
    render() {
        const searchResult = this.props.movies.filter(movie => {
            const regex = new RegExp(this.props.match.params.keyword, 'gi')
            return movie.originalTitle.match(regex);
        })
        return (
            <MovieGrid 
                gridType="search-result"
                title={`نتيجه البحث عن ${this.props.match.params.keyword}`}
                movies={searchResult}
            />
        );
    }
}

export default SearchPage;