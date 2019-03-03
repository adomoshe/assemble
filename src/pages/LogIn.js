import React, { Component } from 'react';

import logo1 from '../logo1.svg';
import logo2 from '../logo2.svg';
import logo3 from '../logo3.svg';

const styles = { logo: { height: '10vh', width: '60vh' } };

class LogIn extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div>
          <img src={logo1} alt="assemble SVG" style={styles.logo} />
          <img src={logo2} alt="assemble SVG" style={styles.logo} />
          <img src={logo3} alt="assemble SVG" style={styles.logo} />
          <div id="container">
            <h1 class="AsembleFont">Welcome to Asemble</h1>
            <ul class="AsembleFont">
              <li>Plan hangouts with your friends</li>
              <li>Organize events for your community</li>
              <li> Assemble with your surroundings</li>
            </ul>
            <div id="login-button" />
            <div id="profile" className="hidden">
              {/* <p id="welcome">Welcome!</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
