import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class MovieItem extends Component {

    //click poster, go to details page of that movie
    //will be a lot of communication between client/server/database
    handlePosterClick = (id) => {
        console.log('handling poster...', id);
        // this.props.history.push(`/movie-details/`);
        //this dispatch is sending id of movie to redux saga
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: id })
    }

    render() {
        return (
                <ul>
                    {this.props.moviesReducer.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <h1>{movie.title}</h1>
                                <img onClick={() => this.handlePosterClick(movie.id)} src={movie.poster} alt="Movie poster for" />
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

//wasn't able to push history until I added withRouter
export default withRouter(connect(mapStoreToProps)(MovieItem));