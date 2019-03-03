import React, { Component } from 'react';
import logo3 from '../../logo3.svg';

import API from '../../utils/API';

const styles = { logo: { height: '10vh', width: '60vh' } };

class Confirmation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.getElementById('container').style.display = 'none';

    API.getEvents().then(res => this.setState({res: res}))
  }

  render() {
    return (
      <div id="container">
        <h1>Your <img src={logo3} alt="assemble SVG" style={styles.logo} /> has been scheduled!</h1>
        <br />
        <br />
        <table id="eventsTable">
          <thead>
            <tr>
              <td>Time:</td>
              <td>Location:</td>
              <td>Accessibility:</td>
            </tr>
          </thead>
          <tbody id="plannedAsemblies" />
        </table>
      </div>
    );
  }
}

export default Confirmation;
