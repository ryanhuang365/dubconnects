import '../App.scss'
import React, { Component } from 'react';
import MainPage from './MainPage';

class LandingPage extends Component {

  buttonClicked() {
    alert('Button clicked!')
    console.log('Button clicked!');
  }

  render() {
    return (
      <div className="landingpage">
        {
          <button onClick={this.buttonClicked}>Join Room</button>
        }
      </div>
    )
  }
}

export default LandingPage;
