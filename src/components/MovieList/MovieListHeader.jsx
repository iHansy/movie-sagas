import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieListHeader extends Component {
    render() {
        return (
            <h1> Current Movies In Library</h1>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(MovieListHeader);