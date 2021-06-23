import React from 'react';
import { Link } from 'react-router-dom';

class Movie extends React.Component {

    toggleRent= () =>{
        this.props.toggleRent(this.props.movie.id)
    }
    render() {
        console.log(this.props.movie)
        return (
            <div className="movie">
                <div className="name">
                    {this.props.movie.title}
                </div>
                <Link to={`/movies/${this.props.movie.id}`}><img className = "movieImg" src={this.props.movie.img}></img></Link>
                <button onClick={this.toggleRent}>{this.props.movie.isRented ? "-" : "+"}</button>
            </div>
        );
    }
}


export default Movie;
