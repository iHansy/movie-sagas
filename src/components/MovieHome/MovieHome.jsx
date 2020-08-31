import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Description from './Description.jsx';

class MovieHome extends Component {

    render() {
        return (
            <div className="movieHome">
                <Header />
                <Description />
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