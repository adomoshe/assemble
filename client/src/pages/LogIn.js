import React, { Component } from 'react';

// import logo1 from '../logo1.svg';
// import logo2 from '../logo2.svg';
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
          <div id="container">
            <h1 className="AsembleFont">Welcome to <img src={logo3} alt="assemble SVG" style={styles.logo} /></h1>
            <ul className="AsembleFont">
              <li>Plan hangouts with your friends</li>
              <li>Organize events for your community</li>
              <li>Assemble with your surroundings</li>
            </ul>
            <div id="login-button" />
            <div id="profile" className="hidden">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
