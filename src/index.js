import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga 
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

function* fetchMovies() {
    try {
        //response.data is list of movies coming from server side
        let response = yield axios.get('/api/movie');
        //this is adding all movies (response.data) to moviesReducer
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) { //catch for any issues
        console.log('error getting movies', error);
    }
}

function* fetchDetails(action) {
    try {
        console.log('fetchDetails action.payload', action.payload);
        let response = yield axios.get(`/api/movie/${action.payload}`);
        //response.data is array of movie details
        yield put({ type: 'SET_DETAILS', payload: response.data})
    } catch (error) { //catch for any issues
        console.log('error getting details', error);
    }
}

function* addMovie(action) {
    try{
        console.log('adding movie', action.payload);
        yield axios.post('/api/movie', action.payload);

    } catch (error) {
        console.log('error getting details', error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('ADD_MOVIE', addMovie);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        detailsReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
