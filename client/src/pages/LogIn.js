import React, { Component } from 'react';

import logo3 from '../logo3.svg';

const styles = {
  root: { marginTop: '8vh' },
  div: {marginBottom: '6vh'},
  logo: { height: '10vh', width: '60vh' }
};

class LogIn extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="row justify-content-center" style={styles.root}>
        <div className="col-sm-6" >
          <h1 style={styles.div}>
            <strong>Welcome to </strong>
            <img src={logo3} alt="assemble SVG" style={styles.logo} />
          </h1>
          <center>
            <div >
              <h4 className="frame">
                <strong>Plan hangouts with your friends</strong>
              </h4>
              <h4 className="frame">
                <strong>Organize events in your area</strong>
              </h4>
              <h4 className="frame">
                <strong>Assemble with your Community!</strong>
              </h4>
            </div>
          </center>
          <div id="login-button" />
          <div id="profile" className="hidden" />
        </div>
      </div>
    );
  }
}

export default LogIn;
