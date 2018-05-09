import React, { Component } from 'react';
import axios from 'axios';
class Register extends Component {
    handleRegistration(event) {
        event.preventDefault();
        const formData = {};
        for (const data in this.refs) {
            formData[data] = this.refs[data].value;
        }
        const RegistrationFormData = JSON.stringify(formData);
        axios.post('/register', {
            RegistrationFormData
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <form className="form-container" action="" onSubmit={this.handleRegistration.bind(this)}>
                        <h1 className="form-header">Register Here</h1>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="FirstName">First Name</label>
                                    <input type="text" className="form-control" id="FirstName" placeholder="First Name" ref="FirstName" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="LastName">Last Name</label>
                                    <input type="text" className="form-control" id="LastName" placeholder="Last Name" ref="LastName" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="Emial">Email</label>
                                    <input type="email" className="form-control" id="Email" placeholder="Email" ref="Email" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="Mobile">Mobile No.</label>
                                    <input type="Number" className="form-control" id="Mobile" placeholder="Mobile Number" ref="Mobile" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="Gender">Gender</label>
                                    <div className="radio">
                                        <label><input type="radio" name="Gender" ref="Gender" value="Male" />Male</label>
                                        &nbsp;&nbsp;
                                        <label><input type="radio" name="Gender" ref="Gender" value="Female" />Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="DateOfBirth">Date Of Birth</label>
                                    <input type="text" className="form-control datepicker" id="DateOfBirth" placeholder="DD/MM/YYYY" ref="DateOfBirth" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input type="password" className="form-control" id="Password" placeholder="Password" ref="Password" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="RePassword">Retype Password</label>
                                    <input type="password" className="form-control" id="RePassword" placeholder="Retype Password" ref="RePassword" />
                                </div>
                            </div>
                        </div>
                        <a href="/termsAndConditions" className="bottomLink" target="_blank">Terms and Conditions</a>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" ref="IAgree"/> I Agree
                </label>
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Submit</button>

                    </form>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            </div>
        );
    }
}
export default Register;