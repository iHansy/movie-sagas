import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {
    render() {
        return (
            <h1>Movie Details!!</h1>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(MovieDetails);