import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import axios from 'axios';
class Login extends Component {
  handleLogin(event) {
    event.preventDefault();
    const formData = {};
    for (const data in this.refs) {
      formData[data] = this.refs[data].value;
    }
    const loginFormData = JSON.stringify(formData);
    axios.post('/api/v1.0/login/auth', {
      loginFormData
    })
      .then( response => {
        const token =response.data.token;
        localStorage.setItem('jwtToken',token);
      })
      .catch(function (error) {
        console.log(error);
        
      });
  }

  render() {
    return (
      <DocumentTitle title={`Reveal~Friends | Login`}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <form className="form-container" action="" onSubmit={this.handleLogin.bind(this)}>
              <h1 className="form-header">Login </h1>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email" className="form-control" id="Email" placeholder="Email" ref="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" id="Password" placeholder="Password" ref="Password" />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" ref="RememberMe" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-success btn-block">Submit</button>
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

export default Login;
