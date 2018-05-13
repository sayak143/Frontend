import React, { Component } from 'react';
import '../css/App.css';
import RevealFriendsRouter from '../routers/RevealFriendsRouter';
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <RevealFriendsRouter/>
      </div>
    );
  }
}

export default App;