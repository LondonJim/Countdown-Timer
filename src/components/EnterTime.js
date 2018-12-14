import React, { Component } from 'react'

class EnterTime extends Component {
  state = {
    minutes: 0,
    seconds: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTime(this.state)
    this.setState({ minutes: 0, seconds: 0})
  }

  handleMinutes = (event) => {
    this.setState({minutes: parseInt(event.target.value, 10)})
  }

  handleSeconds = (event) => {
    this.setState({seconds: parseInt(event.target.value, 10)})
  }


  render() {
    const timebox =
      <form id="submit-form" onSubmit={this.handleSubmit}>
        <input id="minutes" type="number" value={this.state.minutes} min="0" max="60" name="minutes" onChange={this.handleMinutes} />
        <input id="seconds" type="number" value={this.state.seconds} min="0" max="60" name="seconds" onChange={this.handleSeconds} />
        <button type="submit">Submit</button>
      </form>

    return (
      <div className="EnterTime">
        Enter Starting Time
        {timebox}
      </div>
    )
  }
}

export default EnterTime
