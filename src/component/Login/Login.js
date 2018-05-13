import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom';
import InternalError from '../Common/InternalError';
import Loading from '../Common/Loading';
import { connect } from 'react-redux';
import {loginUser} from '../../actions/LoginAction';
class Login extends Component {

  constructor(props){
    super(props);
    this.handleLogin=this.handleLogin.bind(this);
  }
  handleLogin(event) {
    event.preventDefault();
    const formData = {};
    for (const data in event.target) {
      formData[data] = data.value;
    }
    const loginFormData = JSON.stringify(formData);
    this.props.loginUser(loginFormData);
  }
  render() {
    if(this.props.isSuccess){ 
      localStorage.setItem('token', this.props.token);
      return (
        <Redirect to="/" />
      )
    }
    if (this.props.hasErrored) {
      return (
          <InternalError/>
      )
    }
    if (this.props.isLoading) {
      return (
          <Loading/>
      )
    }
    else{
      return (
        <DocumentTitle title={`Reveal~Friends | Login`}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <form className="form-container" action="" onSubmit={this.handleLogin}>
                <h1 className="form-header">Login </h1>
                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input type="email" className="form-control" name="Email" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input type="password" className="form-control" name="Password" placeholder="Password" />
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="rememberMe" name="RememberMe"/> Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-custom btn-block">Submit</button>
                <br />
                <a href="/register" className="registrationLink">New users click here to register</a>
              </form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
          </div>
        </DocumentTitle>
      );
    }
    
  }
}

function mapStateToProps(state, ownProps){
  return {
      hasErrored: state.login.hasErrored,
      isLoading: state.login.isLoading,
      isSuccess: state.login.isSuccess,
      token: state.login.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
      loginUser: (data) => dispatch(loginUser(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
