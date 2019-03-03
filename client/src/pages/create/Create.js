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
      <br></br>
      <br></br>
      <br></br>
      <center>
        <div className="card col-sm-6 justify-content-center inputCard">
          <div className="card-body">
          <center>
            <h1 className="card-title AsembleFont">Welcome (Name) !</h1>
            
            <h4 className="card-text AsembleFont">Let's Assemble!</h4>
            </center>
            <br></br>
            <br></br>
            <form>
              <div className="form-group">
                <h2 className = "AsembleFont" >What event are you assembling?</h2>
                <input
                  name="event"
                  type="input"
                  className="form-control inputCard"
                  placeholder="Enter Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <h2 className = "AsembleFont">When is your event?</h2>
                <input
                  name="date"
                  type="input"
                  className="form-control inputCard"
                  placeholder="Enter Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <h2 className = "AsembleFont">Where are you assembling?</h2>
                <input
                  name="location"
                  type="input"
                  className="form-control inputCard"
                  placeholder="Enter Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <br></br>
              <div className="form-group">
                <h2 className = "AsembleFont">Description (Optional)</h2>
                <input
                name='description'
                  type="input"
                  className="form-control inputCard"
                  placeholder="Describe the purpose of your Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <br></br>
              <button type="button" className="btn btn-primary submitBtn" onClick={this.submit}>
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
