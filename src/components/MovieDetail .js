import React from 'react';

class MovieDetail extends React.Component {

    render() {
        let movieID = this.props.match.params.movieID
        let movie
        console.log("5ghghghgh" ,movieID)
        for (let i of this.props.movies) {
            if (i.id == movieID) {
                console.log("5ghghghgh" ,i)
                movie = i
            }
        }
        return (
            <div>
                <h1>HELOOOOOOOOOOO</h1>
                <div className="movieName">
                    <h1>{movie.title} ({movie.year})</h1>
                </div>
                <img src={movie.img}></img>
                <div className="movieDescription">
                    <p>{movie.descrShort}</p>
                </div>
            </div>
        );
    }
}


export default MovieDetail;
