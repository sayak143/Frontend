import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
class Home extends Component{
    render(){
        return (
        <div className="row">
            <div>
                   <NavBar/>
            </div>
        </div>
        )
    }
}

export default Home;