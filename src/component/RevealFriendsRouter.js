import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import NoMatch from './NoMatch';

class RevealFriendsRouter extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register}/>
            <Route path='*' exact={true} component={NoMatch} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default RevealFriendsRouter;