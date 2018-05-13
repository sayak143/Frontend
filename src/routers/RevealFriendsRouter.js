import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../component/Login/Login';
import Register from '../component/Registration/Register';
import NoMatch from '../component/Common/NoMatch';
import Home from '../component/Home';
import TAndC from '../component/TermsAndConditions/TAndC'
import PrivateRoute from './ProtectedRoute'

class RevealFriendsRouter extends Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register}/>
            <Route path="/termsAndConditions" exact component= {TAndC}/>
            <PrivateRoute path="/" component={Home}/>
            <Route path='*' exact={true} component={NoMatch} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default RevealFriendsRouter;