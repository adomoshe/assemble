import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
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

  render() {
    return (
      <div className="" id = "createPage-container">
      <br></br>
        <div className="card col-sm-6 justify-content-center">
          <div className="card-body">
            <h1 className="card-title">Welcome (Name)</h1>
            <p className="card-text">Let's Assemble!</p>
            <form>
              <div className="form-group">
                <h2>What are you assembling?</h2>
                <input
                  type="input"
                  className="form-control inputField"
                  placeholder="Enter Assembly"
                  onChange={this.handleInputChange}
                  style = "border: 1.5px solid black !important; "
                />
              </div>
              <div className="form-group">
                <h2>Description </h2>
                <input
                  type="input"
                  className="form-control"
                  placeholder="Describe the purpose of your Assembly"
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="button" className="btn btn-primary">
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
