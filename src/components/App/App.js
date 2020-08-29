import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';

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
          <Route exact path="/" component={MovieList} />
        </Router>
      </div>
    );
  }
}

export default App;
