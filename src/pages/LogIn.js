import React, { Component } from 'react';

class LogIn extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return (
        <div id = "container">
          <div id = "header">
          <center>
            <br></br>
            <h1> Welcome to Assemble</h1>
            <br></br>
            <div id="my-login-button-target" ></div>/>
            </center>
          </div>
          <div id = "body">

          </div>
        </div>
      );
    }
  }

  export default LogIn;