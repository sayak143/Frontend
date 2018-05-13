import React, { Component } from 'react';

export default class Loading extends Component {
    render(){
        return(
            <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="alert alert-warning">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <strong>Something Went Wrong</strong> <h4>Sorry !!! We are working hard to make your experience better</h4>
                        </div>
                        <br />
                        <br />
                        <a className="btn btn-success" href="http://localhost:3000" role="button">Return back to application</a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    </div>
                </div>
        )
    }
}
