import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, InputLabel, MenuItem, FormControl, Select, } from '@material-ui/core';

class FORM extends Component {

    state = {
        
    }

    // RESEARCH THEMES!!!

    render() {

        return (
            <form>
                <div>
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Movie Title"
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Poster image URL"
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Description"
                    />
                </div>
                <div>
                    <FormControl>
                        <InputLabel>Genre</InputLabel>
                        <Select
                            style={{minWidth: "10em"}}
                            value="10"
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