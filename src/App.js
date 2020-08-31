import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

import NavBar from "./components/layout/NavBar";
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState( { loading: true } );
    
  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState( { users: res.data, loading: false } );
  // }

  searchUsers = async text => {
    this.setState( { loading: true } );
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState( { users: res.data.items, loading: false } );
  }

  clearUsers = () => this.setState({ users: [] });

  render() {
    const {loading, users} = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Search searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
              showClear={users.length > 0 ? true: false}
            />
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
