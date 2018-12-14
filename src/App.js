import React, { Component } from 'react';
import EnterTime from './components/EnterTime'

class App extends Component {
  state = {
    minutes: 0,
    seconds: 0
  }

  addTime = (state) => {
    this.setState(state)
  }

  render() {
    return (
      <div className="App">
        <EnterTime addTime={this.addTime}/>
      </div>
    );
  }
}

export default App;
