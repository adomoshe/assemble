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
      <div id="container">
        <div id="login-button" />
        <img src={logo1} alt="assembly SVG" style={styles.logo} />
        <img src={logo2} alt="assembly SVG" style={styles.logo} />
        <img src={logo3} alt="assembly SVG" style={styles.logo} />
        <p id="welcome">Welcome!</p>
      </div>
    );
  }
}

export default LogIn;
