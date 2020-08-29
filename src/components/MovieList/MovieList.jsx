import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem.jsx';
import MovieListHeader from './MovieListHeader.jsx';

class MovieList extends Component {

    componentDidMount() {
        console.log('MovieList rendered...');
        this.fetchMovies();
    }

    //sending dispatch to sagas to start axios request
    fetchMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    render() {
        return (
            <>
                <MovieListHeader />
                <MovieItem />
            </>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
                    reduxStore
                }
}

export default connect(mapStoreToProps)(MovieList);