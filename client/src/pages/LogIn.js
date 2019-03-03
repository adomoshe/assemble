import React, { Component } from 'react';

// import logo1 from '../logo1.svg';
// import logo2 from '../logo2.svg';
import logo3 from '../logo3.svg';

const styles = { logo: { height: '10vh', width: '60vh' } };

class LogIn extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    var elem = document.getElementById('picture');
    elem.style.top = '50px';
    elem.style.left = '50px';
  }

  render() {
    return (
      <div>
        <div>
          <div id="container">
            <h1 className="AsembleFont">
              <strong>Welcome to </strong>
              <img src={logo3} alt="assemble SVG" style={styles.logo} />
            </h1>
            <br />
            <br />
            <br />
            <center>
              <ul className="AsembleFont">
                <li className="frame" id="moveRight">
                  <strong>Plan hangouts with your friends</strong>
                </li>
                <br />
                <br />
                <li className="frame" id="moveLeft">
                  <strong>Organize events for your surroundings</strong>
                </li>
                <br />
                <br />
                <li className="frame" id="moveRight">
                  <strong>Assemble with your Community</strong>
                </li>
              </ul>
            </center>
            <br />
            <br />
            <br />

            <div id="login-button" />
            <div id="profile" className="hidden" />
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
