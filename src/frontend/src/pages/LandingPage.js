import React from 'react'
import Background from '../components/Background'

<<<<<<< Updated upstream
function buttonClicked() {
  alert('Button clicked!')
=======
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: false,
      identifier: ''
    };
  }

  buttonClicked() {
    this.setState({ room: true });
    alert('Button clicked!')
    console.log('Button clicked!');
  }

  removePlaceholderText() {
    this.inputRef.current.placeholder = '';
  }

  updateIdentity(event) {
    this.setState({ identifier: event.target.value });
  }

  render() {
    return (
      <div className="landingpage">
        {
          <div className="lobby">
            <input
              value={this.state.identifier}
              onChange={this.updateIdentity}
              ref={this.inputRef}
              onClick={this.removePlaceholderText}
              placeholder="Enter Your UW NetId (@uw.edu)" />
            <button onClick={this.buttonClicked}>Join Room</button>
          </div>
        }
      </div>
    )
  }
>>>>>>> Stashed changes
}

export default function LandingPage() {
  return (
    <button onClick={buttonClicked}>Click me!</button>
  )
}
