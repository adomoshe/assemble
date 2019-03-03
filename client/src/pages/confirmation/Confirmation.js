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
    document.getElementById('login-button').style.display = "none";
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    

  }

  render() {
    const events = this.state.events;

    return (
      <div id="confirmation-container">
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
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>
      </div>
    );
  }
}

export default Confirmation;
