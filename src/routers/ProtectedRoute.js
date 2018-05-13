import React from 'react';
//import { connect } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      (localStorage.getItem('token')!==undefined 
      && localStorage.getItem('token')!=='' 
      &&localStorage.getItem('token')!==null)
      ? (
         <Component {...props} />
      )
      : (<Redirect to={{ pathname: '/login', state: { from: props.location} }} />)
    )}
  />
  );
  
  export default PrivateRoute;