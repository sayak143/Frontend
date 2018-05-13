import React, { Component } from 'react';
class NoMatch extends Component {

    render() {
        return (
            <div className="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="alert alert-warning">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>404</strong> <h4>Sorry !!! Page Not Found</h4>
                    </div>
                    <br/>
                    <br/>
                    <a class="btn btn-success" href="https://www.revealfriends.com" role="button">Return back to application</a>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                </div>
            </div>
        );
    }
}

export default NoMatch;
