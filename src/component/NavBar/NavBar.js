import React, {
    Component
} from 'react';

import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {logOutUser} from '../../actions/LogoutAction';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.toggleNavBar=this.toggleNavBar.bind(this);
        this.logOut=this.logOut.bind(this);
    }

    toggleNavBar(){
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") === -1) {
            x.className += " w3-show";
        } else { 
            x.className = x.className.replace(" w3-show", "");
        }
    }
    logOut(){
        this.props.logOutUser();
    }
    render() {
        if(this.props.isSuccess)
        {
                return(<Redirect to="/login"/>)
        }
        else{
        return (
            <div>
                <div className="w3-top">
                    <div className="w3-bar navBar w3-card">
                        <button className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="" onClick={this.toggleNavBar} title="Toggle Navigation Menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <button className="w3-bar-item w3-button w3-padding-large">
                            HOME
                        </button>
                        <button className="w3-bar-item w3-button w3-padding-large w3-hide-small">
                            BAND
                        </button>
                        <button className="w3-bar-item w3-button w3-padding-large w3-hide-small">
                            TOUR
                        </button>
                        <button className="w3-bar-item w3-button w3-padding-large w3-hide-small">
                            CONTACT
                        </button>
                        <button className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right"
                            onClick={this.logOut}
                        >
                            LOGOUT 
                        </button>

                        </div>
                    </div>
                    <div id="navDemo" className="w3-bar-block navBar w3-hide w3-hide-large w3-hide-medium w3-top" style={{'marginTop':46+'px'}}>
                        <button className="w3-bar-item w3-button w3-padding-large">
                            BAND
                        </button>
                        <button className="w3-bar-item w3-button w3-padding-large">
                            TOUR
                        </button>
                        <button href="#contact" className="w3-bar-item w3-button w3-padding-large">
                            CONTACT
                        </button>
                        <button className="w3-bar-item w3-button w3-padding-large"
                         onClick={this.logOut}>
                            LOGOUT
                        </button>
                    </div>
                </div>
            )
        }   
    }
}
function mapStateToProps(state){
    return {
        isSuccess: state.logout.isSuccess,
        };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        logOutUser: () => dispatch(logOutUser())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
  