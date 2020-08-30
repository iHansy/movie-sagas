import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Form from './Form.jsx';

class MovieAddNew extends Component {
    render() {
        return (
            <div>
                <Header />
                <Form />
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