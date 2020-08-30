import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class FORM extends Component {

    // RESEARCH THEMES!!!

    render() {
        
        return (
            <form>
                <TextField 
                    type="text" 
                    placeholder="Movie Title" 
                    id="filled-basic"
                />
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