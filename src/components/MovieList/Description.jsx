import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieListDescription extends Component {
    render() {
        return (
            <h3>Description of list page goes here</h3>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(MovieListDescription);