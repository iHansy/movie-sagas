import React, { Component } from 'react';

class MovieList extends Component {

    componentDidMount() {
        console.log('MovieList rendered...');
    }

    //sending dispatch to sagas to start axios request
    fetchMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
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

export default (MovieList);