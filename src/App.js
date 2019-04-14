import React from 'react';
import './App.css';
import Heading from './Heading';
import Start from './Start';
import DisplayLocation from './DisplayLocation';

export default class App extends React.Component {
  state = {
    pageName: "Where is the International Space Station... Right Now?",
    buttonText: "Press for current location",
    buttonPressed: false    
  }
  buttonPressed = () => {
    this.setState((prevState) => ({
      buttonText: "Double Click to Refresh",
      buttonPressed: !prevState.buttonPressed
    }))
  }
  render() {
    return (
    <div className="App">
      <Heading pageName={this.state.pageName} />
      <Start buttonText={this.state.buttonText} buttonPressed={this.buttonPressed} />
      <DisplayLocation buttonPressed={this.state.buttonPressed} />
    </div>
    )
  }
}
