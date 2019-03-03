import React, { Component } from 'react';

import API from '../../utils/API';

const styles = {
  bitmoji: {
    left: 0,
    width: '15vh',
    height: '15vh'
  }
}

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', date: '', location: '', description: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // var un = document.getElementById('welcome').textContent();
    document.getElementById('container').style.display = 'none';
  }

  handleInputChange({ target }) {
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submit() {
    console.log(this.state);

    if (!this.state.title || !this.state.date || !this.state.location) {
      alert('Fill out all information!');
    } else {
      API.saveEvent({
        title: this.state.title,
        date: this.state.date,
        location: this.state.location,
        description: this.state.description
      })
        .then(
          this.setState({
            title: '',
            date: '',
            location: '',
            description: ''
          }),
          window.location.pathname = '/confirmation'
        )
        .catch(err => console.log(err));
    }
  }

  render() {
    const snapPic = sessionStorage.getItem('snapPic');
    const snapName = sessionStorage.getItem('snapName');

    return (
      <div className='row justify-content-center'>
            <img src={snapPic} alt='bitmoji' style={styles.bitmoji}/>
      <div className='col-sm-6'>
        <center>
          <div className="card justify-content-center inputCard">
            <div className="card-body">
              <center>
                <h1 className="card-title AsembleFont" id = "welcome">Welcome {snapName}</h1>
                <h4 className="card-text AsembleFont">Let's Assemble!</h4>
              </center>
              <br />
              <br />
              <form>
                <div className="form-group">
                  <h2 className="AsembleFont">
                    What event are you assembling?
                  </h2>
                  <input
                    name="title"
                    type="input"
                    value={this.state.title}
                    className="form-control inputCard"
                    placeholder="Assembly Title"
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <h2 className="AsembleFont">When is your event?</h2>
                  <input
                    name="date"
                    type="input"
                    value={this.state.date}
                    className="form-control inputCard"
                    placeholder="Date and Time (Freeform)"
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <h2 className="AsembleFont">Where are you assembling?</h2>
                  <input
                    name="location"
                    type="input"
                    value={this.state.location}
                    className="form-control inputCard"
                    placeholder="Location"
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <h2 className="AsembleFont">Description (Optional)</h2>
                  <input
                    name="description"
                    type="input"
                    value={this.state.description}
                    className="form-control inputCard"
                    placeholder="Describe the purpose of your Assembly"
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <button
                  type="button"
                  className="btn btn-primary submitBtn"
                  onClick={this.submit}
                >
                  <strong>Submit</strong>
                </button>
              </form>
            </div>
          </div>
        </center>
      </div>
      </div>
    );
  }
}

export default Create;
