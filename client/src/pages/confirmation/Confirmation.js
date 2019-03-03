import React, { Component } from 'react';
import logo3 from '../../logo3.svg';

import API from '../../utils/API';

const styles = { logo: { height: '10vh', width: '60vh' } };

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = { events: '' };
  }

  componentWillMount() {
    API.getEvents().then(res => this.setState({ events: res.data }));
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    // document.getElementById('container').style.display = 'none';
  }

  render() {
    const events = this.state.events;

    return (
      <div id="">
        <h1>
          Your <img src={logo3} alt="assemble SVG" style={styles.logo} /> has
          been scheduled!
        </h1>
        <br />
        <br />

        {events &&
          events.map((event, index) => {
            return (
              <ul key={index}>
                <li>Title: {event.title}</li>
                <li>Date: {event.date}</li>
                <li>Location: {event.location}</li>
                {event.description && <li>Description: {event.description}</li>}
              </ul>
            );
          })}
      </div>
    );
  }
}

export default Confirmation;
