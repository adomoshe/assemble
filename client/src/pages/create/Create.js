import React, { Component } from 'react';
import API from '../../utils/API';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { event: '', date: '', location: '', description: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

    if (!this.state.event || !this.state.date || !this.state.location) {
      alert('Fill out all information!');
    } else {
      API.saveEvent({
        event: this.state.event,
        date: this.state.date,
        location: this.state.location,
        description: this.state.description
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    this.setState({
      event: '',
      date: '',
      location: '',
      description: ''
    });
  }

  render() {
    return (
      <div className="">
        <br />
        <br />
        <br />
        <center>
          <div className="card col-sm-6 justify-content-center inputCard">
            <div className="card-body">
              <center>
                <h1 className="card-title AsembleFont">Welcome (Name) !</h1>

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
                    name="event"
                    type="input"
                    className="form-control inputCard"
                    placeholder="Enter Assembly"
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <h2 className="AsembleFont">When is your event?</h2>
                  <input
                    name="date"
                    type="input"
                    className="form-control inputCard"
                    placeholder="Enter Assembly"
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <h2 className="AsembleFont">Where are you assembling?</h2>
                  <input
                    name="location"
                    type="input"
                    className="form-control inputCard"
                    placeholder="Enter Assembly"
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <h2 className="AsembleFont">Description (Optional)</h2>
                  <input
                    name="description"
                    type="input"
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
    );
  }
}

export default Create;
