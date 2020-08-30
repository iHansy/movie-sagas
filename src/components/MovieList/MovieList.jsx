import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item.jsx';
import Header from './Header.jsx';
import Description from './Description.jsx';

class MovieList extends Component {

    componentDidMount() {
        console.log('MovieList rendered...');
        this.fetchMovies();
    }

    handleGoHome = () => {
        this.props.history.push('/');
    }

    //sending dispatch to sagas to start axios request
    fetchMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    //function to go to add movie page
    handleAddMovie = () => {
        this.props.history.push('/add-movie');
    }

    render() {
        return (
            <>
                <button onClick={this.handleGoHome}>Go Home</button>
                <Header />
                <Description />
                <button onClick={this.handleAddMovie}>Add New Movie</button>
                <Item />
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