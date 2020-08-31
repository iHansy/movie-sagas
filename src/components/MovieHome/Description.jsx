import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Description extends Component {

    //going to movie list
    handleViewMovies = () => {
        this.props.history.push('/movie-list');
    }

    render() {
        return (
            <>
                <div className="homeDiv">
                    <img src="images/popcorn.jpeg" alt="Popcorn" />
                    <p>
                        You have entered the Movie Hub! Think of this like a movie library.
                        Moving forward, you will be able to see all movies, specific details 
                        about a movie, and even add a new one. Click "View Movies" to begin!
                </p>
                </div>
                <div className="homeButton">
                    <Button
                        variant="contained" color="primary"
                        onClick={this.handleViewMovies} size="large">
                        View Movies
                    </Button>
                </div>
            </>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default withRouter(connect(mapStoreToProps)(Description));