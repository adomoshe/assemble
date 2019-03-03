import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};

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
    
  }

  render() {
    return (
      <div className="">
        <div className="card col-sm-6 justify-content-center">
          <div className="card-body">
            <h1 className="card-title">Welcome (Name)</h1>
            <p className="card-text">Let's Assemble!</p>
            <form>
              <div className="form-group">
                <h2>What event are you assembling?</h2>
                <input
                  name="event"
                  type="input"
                  className="form-control"
                  placeholder="Enter Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <h2>When is your event?</h2>
                <input
                  name="date"
                  type="input"
                  className="form-control"
                  placeholder="Enter Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <h2>Where are you assembling?</h2>
                <input
                  name="location"
                  type="input"
                  className="form-control"
                  placeholder="Enter Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <h2>Description (Optional)</h2>
                <input
                name='description'
                  type="input"
                  className="form-control"
                  placeholder="Describe the purpose of your Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={this.submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
