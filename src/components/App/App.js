import React, { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import MovieHome from '../MovieHome/MovieHome.jsx';
import MovieList from '../MovieList/MovieList.jsx';
import MovieDetails from '../MovieDetails/MovieDetails.jsx';
import MovieAddNew from '../MovieAddNew/MovieAddNew.jsx';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
          {/* Add header here if wanted */}
        </header>
        <Router>
          {/* ADD PAGES! */}
          <Route exact path="/" component={MovieHome} />
          <Route exact path="/movie-list" component={MovieList} />
          <Route exact path="/add-movie" component={MovieAddNew} />
          <Route exact path="/movie-details" component={MovieDetails} />
        </Router>
      </div>
    );
  }
}

export default App;
