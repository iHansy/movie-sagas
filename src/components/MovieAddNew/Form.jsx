import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, InputLabel, MenuItem, FormControl, Select, } from '@material-ui/core';

class FORM extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genre_id: '',
        rating: '',
    }

    //dynamic setState function using inputs/dropdowns
    handleChange = (property, event) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }

    handleSaveMovie = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'ADD_MOVIE'})
    }

    // RESEARCH THEMES!!!

    render() {

        return (
            <form>
                <div>
                    <TextField
                        value={this.state.title}
                        onChange={(event) => this.handleChange('title', event)}
                        type="text"
                        variant="outlined"
                        label="Movie Title"
                    />
                </div>
                <div>
                    <TextField
                        value={this.state.poster}
                        onChange={(event) => this.handleChange('poster', event)}
                        type="text"
                        variant="outlined"
                        label="Poster image URL"
                    />
                </div>
                <div>
                    <TextField
                        value={this.state.description}
                        onChange={(event) => this.handleChange('description', event)}
                        type="text"
                        variant="outlined"
                        label="Description"
                    />
                </div>
                <div>
                    <FormControl>
                        <InputLabel>Genre</InputLabel>
                        <Select
                            style={{ minWidth: "10em" }}
                            value={this.state.genre_id}
                            onChange={(event) => this.handleChange('genre_id', event)}
                        >
                            <MenuItem value={1}>Action</MenuItem>
                            <MenuItem value={2}>Adventure</MenuItem>
                            <MenuItem value={3}>Comedy</MenuItem>
                            <MenuItem value={4}>Documentary</MenuItem>
                            <MenuItem value={5}>Drama</MenuItem>
                            <MenuItem value={6}>Family</MenuItem>
                            <MenuItem value={7}>Fantasy</MenuItem>
                            <MenuItem value={8}>Horror</MenuItem>
                            <MenuItem value={9}>Musical</MenuItem>
                            <MenuItem value={10}>Mystery</MenuItem>
                            <MenuItem value={11}>Romance</MenuItem>
                            <MenuItem value={12}>Thriller</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel>Rated</InputLabel>
                        <Select
                            style={{ minWidth: "10em" }}
                            value={this.state.rating}
                            onChange={(event) => this.handleChange('rating', event)}
                        >
                            <MenuItem value="G">G</MenuItem>
                            <MenuItem value="PG">PG</MenuItem>
                            <MenuItem value="PG-13">PG-13</MenuItem>
                            <MenuItem value="R">R</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <button>Cancel</button>
                    <button onClick={this.handleSaveMovie}>Save Movie</button>
                </div>
            </form>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(FORM);