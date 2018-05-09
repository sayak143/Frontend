import React, { Component } from 'react';
import './App.css';
import RevealFriendsRouter from './component/RevealFriendsRouter'
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
