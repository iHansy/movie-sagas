import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Details from './Details.jsx';

class MovieDetails extends Component {

    render() {
        return (
            <div>
                <Header />
                <Details />
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(MovieDetails);