import React, { Component } from 'react';

class LogIn extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return (
        <div id="container">
          <div id="login-button"></div>
          <div id="profile" className="hidden">
            <img id="picture" src="#"></img> 
            <p id="welcome">Welcome!</p>
            <h3> hello</h3>
          </div>
        </div>
      );
    }
  }

  export default LogIn;