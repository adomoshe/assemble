import React, { Component } from 'react';
import logo3 from '../../logo3.svg';

import API from '../../utils/API';

const styles = {
  div: { float: 'left', margin: '2vh', padding: '2vh', color: 'rgba' },
  header: { marginTop: '4vh' },
  logo: { height: '10vh', width: '60vh', marginBottom: '3vh' }
};

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = { events: '' };
  }

  componentWillMount() {
    API.getEvents().then(res => this.setState({ events: res.data }));
    document.getElementById('login-button').style.display = 'none';
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const events = this.state.events;

    return (
      <div className="row justify-content-center" style={styles.header}>
        <div className="col-sm-10">
          <h1>
            Your<img src={logo3} alt="assemble SVG" style={styles.logo} />has
            been scheduled!
          </h1>
        </div>
        <div className="col-sm-6">
          {events &&
            events.map((event, index) => {
              return (
                <div key={index} className="frame" style={styles.div}>
                  <h4>Title: {event.title}</h4>
                  <h4>Date: {event.date}</h4>
                  <h4>Location: {event.location}</h4>
                  {event.description && (
                    <h4>Description: {event.description}</h4>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Confirmation;
