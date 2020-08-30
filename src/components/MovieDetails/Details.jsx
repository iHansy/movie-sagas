import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        let movie = this.props.detailsReducer[0];
        return (
            <div>
                {/* only displaying certain text as long as detailsReducer is truthy */}
                {movie && <h2>{movie.title}</h2>}
                {movie && <h4>Genre:</h4>}
                <ul>
                    {this.props.detailsReducer.map((movieItem, i) => {
                        return (
                            <p key={i}>{movieItem.name}</p>
                        )
                    })}
                </ul>
                {movie && <i>Rating: {movie.rating}</i>}
                {movie && <p>{movie.description}</p>}
                {movie && <img src={movie.poster} alt={movie.title} />}
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        detailsReducer: reduxStore.detailsReducer
    }
}

export default connect(mapStoreToProps)(Details);