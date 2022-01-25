import React from "react";

const Details = (props) => {
        const Id = props.movies.posterPath;
        return (
            <>
                <section className="section hero movieDetails">
                    <div className="container">
                        <div className="moveVideo">
                            <iframe
                                src={`https://www.youtube.com/embed/`}
                                frameBorder="0"
                                title="video"
                            />
                            <div className="movieDetail">
                                <h2 className="featured-title">ty</h2>
                                <p className="featured-overview">yt</p>
                                <p className="movie-general-data">yt</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section movie-meta-data">
                    <div className="container">
                        <h3 className="section-title">التفاصيل</h3>
                        <ul>
                            <li>
                                <span className="title">النوع</span>
                                <span className="values">ty</span>
                            </li>
                        </ul>
                        <div className="plot">
                            <h3 className="section-title">القصه</h3>
                            <p>y</p>
                        </div>
                    </div>
                </section>
            </>
        )
}

export default Details;