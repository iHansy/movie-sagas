import React, { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import MovieDetails from '../MovieDetails/MovieDetails.jsx';

class App extends Component {

  componentDidMount() {
    console.log(this.props.history);
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
          {/* Add header here if wanted */}
        </header>
        <Router>
          {/* ADD PAGES! */}
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movie-details" component={MovieDetails} />
        </Router>
      </div>
    );
  }
}

export default App;
