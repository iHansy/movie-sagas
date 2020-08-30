import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div>
                <h1> ADD NEW MOVIE HEADER </h1>
                <p>instructions, all fields required ect...</p>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Header);