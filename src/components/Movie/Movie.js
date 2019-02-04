import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
    /* to check correct type of props */
  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string
  }
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} /> 
                <h1>{this.props.title}</h1> 

            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster} />
        )
    }
}

export default Movie;