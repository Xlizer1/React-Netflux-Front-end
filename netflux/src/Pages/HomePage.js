import React from "react";
import Hero from "../components/hero";
import MovieGrid from "../components/MovieGrid";

import { suggested, recentRelease, mostViewet } from '../utils/helper' 

class HomePage extends React.Component{
    render() {
        return (
            <>
                <Hero />
                <MovieGrid 
                    title= "اقتراحنا لك" 
                    GridType="is-suggested"
                    movies = {suggested(this.props.movies)}
                    limit={4}
                />
                <MovieGrid 
                    title= "الاكثر مشاهدة" 
                    GridType="is-suggested"
                    movies = {mostViewet(this.props.movies)}
                    limit={4}
                />
                <MovieGrid 
                    title= "احدث الافلام" 
                    GridType="is-suggested"
                    movies = {recentRelease(this.props.movies, "Film")}
                    limit={8}
                />
                <MovieGrid 
                    title= "احدث المسلسلات" 
                    GridType="is-suggested"
                    movies = {recentRelease(this.props.movies, "Film")}
                    limit={8}
                />
            </>
        )
    }
}

export default HomePage;