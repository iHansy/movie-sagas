import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Header extends Component {

//going back to home/movie list page
handleBack = () => {
    //clearing detailsReducer
    this.props.dispatch({ type: 'SET_DETAILS', payload: [] })
    this.props.history.push('/movie-list');
}

    render() {
        return (
            <div>
                <button onClick={this.handleBack}>All Movies</button>
                <h1>DETAILS HEADER</h1>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default withRouter(connect(mapStoreToProps)(Header));