import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {

    //going back to home/movie list page
    handleBack = () => {
        //clearing detailsReducer
        this.props.dispatch({ type: 'SET_DETAILS', payload: [] })
        this.props.history.push('/');
    }

    render() {
        let movie = this.props.detailsReducer[0];
        return (
            <div>
                <h1>Details View</h1>
                <button onClick={this.handleBack}>Back To Movies</button>
                {/* only displaying certain text as long as detailsReducer is truthy */}
                {movie && <h2>{movie.title}</h2>}
                {movie && <h4>Genre:</h4>}
                <ul>
                    {this.props.detailsReducer.map((movie, i) => {
                        return (
                            <p key={i}>{movie.name}</p>
                        )
                    })}
                </ul>
                {movie && <i>Rating: {movie.rating}</i>}
                {movie && <p>{movie.description}</p>}
                {movie && <img src={movie.poster} alt={movie.title} />}
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        detailsReducer: reduxStore.detailsReducer
    }
}

export default connect(mapStoreToProps)(MovieDetails);