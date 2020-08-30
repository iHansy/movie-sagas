import React, { Component } from 'react';
import { connect } from 'react-redux';

class Description extends Component {
    render() {
        return (
            <div>
                <p>popcorn picture here</p>
                <h3>description of website here</h3>
                <p>movie picture here</p>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Description);