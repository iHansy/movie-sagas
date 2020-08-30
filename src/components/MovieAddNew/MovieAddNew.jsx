import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieAddNew extends Component {
    render() {
        return (
            <div>
                <h1>ADD NEW MOVIE HEADER</h1>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(MovieAddNew);