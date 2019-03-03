import React, { Component } from 'react';

class LogIn extends Component 
{
    componentDidMount() {
      window.scrollTo(0, 0);

      window.snapKitInit = function () {
        var loginButtonIconId = 'my-login-button-target';
        // Mount Login Button
        LogIn.loginkit.mountButton(loginButtonIconId, {
          clientId: '203244e5-5b0f-4628-a29c-96ad95e105e4',
          redirectURI: 'http://localhost:3000/',
          scopeList: [
            'user.display_name',
            'user.bitmoji.avatar',
          ],
          handleResponseCallback: function() {
            LogIn.loginkit.fetchUserInfo()
              .then(data => console.log('User info:', data));
          },
        });
      };

      
      // Load the SDK asynchronously
      (function (d, s, id) 
      {
        var js, sjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://sdk.snapkit.com/js/v1/login.js";
        sjs.parentNode.insertBefore(js, sjs);
      }
      (document, 'script', 'loginkit-sdk'));
    }
    render() {
      return (
        <div id = "container">
          <div id = "header">
          <center>
            <br></br>
            <h1> Welcome to Assemble</h1>
            <br></br>
            <div id="my-login-button-target" ></div>
            </center>
          </div>
          <div id = "body">

          </div>
        </div>
      );
    }
  }

  export default LogIn;