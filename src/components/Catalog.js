import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';


class Catalog extends React.Component {

    toggleRent = (movieID) => {
        this.props.toggleRent(movieID)
    }

    updateSearchedWord=(event)=>{
        this.props.updateSearchedWord(event.target.value)
    }
    render() {
        let budget = this.props.getBudget()
        return (
            <div>
                <div className="budget">
                <h1>{budget}</h1>
                </div>
                <div className="inputbar">
                    <input type="text" value={this.searchedWord} onChange={this.updateSearchedWord}></input>
                </div>
                <div className="moviesContainer">
                    <div className="rentedMovies">
                        <h1>Rented</h1>
                        {this.props.movies.map(movie =>
                            movie.isRented ? <Movie toggleRent={this.toggleRent} movie={movie} /> : null 
                        )}
                    </div>
                </div>
                <div className="moviesContainer">
                    <div className="rentedMovies">
                        <h1>Catalog</h1>
                        {this.props.movies.map(movie =>
                            !movie.isRented ? <Movie toggleRent={this.toggleRent} movie={movie} />: null 
                        )}
                    </div>
                </div>
            </div>
        );
    }
}


export default Catalog;
