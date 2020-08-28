import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

import NavBar from "./components/layout/NavBar";
import Users from './components/users/Users';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState( { loading: true } );
    
    const res = await axios.get('https://api.github.com/users');

    this.setState( { users: res.data, loading: false } );
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
