import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Description from './Description.jsx';

class MovieHome extends Component {

    //going to movie list
    handleViewMovies = () => {
        this.props.history.push('/movie-list');
    }

    render() {
        return (
            <div>
                <Header />
                <Description />
                <button onClick={this.handleViewMovies}>View Movies</button>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(MovieHome);