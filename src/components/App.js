import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import React, { Component } from 'react';
import { loadAuthToken, saveAuthToken } from '../local-storage';

class App extends Component {
  render() {
    return (
      <div className="app">
        Hello
      </div>
    );
  }
}

export default App