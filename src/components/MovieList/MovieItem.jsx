import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
    render() {
        return (
            <ul>
                {this.props.moviesReducer.map((movie, index) => {
                    return (
                        <div key={index}>
                            <h1>{movie.title}</h1>
                            <img src={movie.poster} alt="Movie poster for" />
                            {movie.description}
                        </div>
                    )
                })}
            </ul>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        moviesReducer: reduxStore.moviesReducer,
    }
}

export default connect(mapStoreToProps)(MovieItem);