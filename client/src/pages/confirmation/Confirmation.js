import React, { Component } from 'react';
import logo3 from '../../logo3.svg';

import API from '../../utils/API';

const styles = { logo: { height: '10vh', width: '60vh' } };

class Confirmation extends Component {
  componentWillMount() {
    API.getEvents().then(res => this.setState({ events: res }));
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.getElementById('container').style.display = 'none';
  }

  render() {
    const events = this.state.events;

    return (
      <div id="container">
        <h1>
          Your <img src={logo3} alt="assemble SVG" style={styles.logo} /> has
          been scheduled!
        </h1>
        <br />
        <br />
        {events.map((event, index) => {
          return (
            <table id="eventsTable">
              <thead>
                <tr>
                  <td>Title: {event.title}</td>
                  <td>Date: {event.date}</td>
                  <td>Location: {event.location}</td>
                  {event.description && (
                    <td>Description: {event.description}</td>
                  )}
                </tr>
              </thead>
              <tbody id="plannedAsemblies" />
            </table>
          );
        })}
      </div>
    );
  }
}

export default Confirmation;
