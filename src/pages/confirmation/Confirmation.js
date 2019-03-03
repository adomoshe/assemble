import React, { Component } from 'react';

const styles = { logo: { height: '10vh', width: '60vh' } };

class Confirmation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id = "container">
            <h1>
                Your Asembly has been schedules!
            </h1>
            <br></br>
            <br></br>
            <table id = "eventsTable">
                <thead>
                    <tr>
                        <td>Time:</td> &nbsp;
                        <td> Location: </td> &nbsp;
                        <td> Accesiblity:</td> &nbsp;

                    </tr>
                </thead>
                <tbody id = "plannedAsemblies">

                </tbody>
            </table>
      </div>
    );
  }
}

export default Confirmation;
