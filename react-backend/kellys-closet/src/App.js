import React, { Component } from 'react';
import logo from './LTSlogo.jpg';
import './App.css';

class App extends Component {
  state = {users: []}

 componentDidMount() {
   fetch('/users')
     .then(res => res.json())
     .then(users => this.setState({ users }));
 }

  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="title">Welcome to Kelly's Closet!</h2>
          </div>
          <div className="Main">
          </div>
          <div className="App-content">
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>


              <div>
                <h1>Users</h1>
                {this.state.users.map(user =>
                  <div key={user.id}>{user.username}</div>
                )}
              </div>
          </div>

      </div>
    );
  }
}

export default App;
