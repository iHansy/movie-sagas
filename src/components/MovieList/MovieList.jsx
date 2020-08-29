import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <header>
                    <h1>Movies In Library</h1>
                </header>
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