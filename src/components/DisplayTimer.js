import React, { Component } from 'react'

class DisplayTimer extends Component {

  twoDigitTime = (digit) => {
    return ("0" + (digit).toString()).slice(-2)
  }

  render () {
    return (
      <div className="DisplayTimer">
        DisplayTimer {`${this.twoDigitTime(this.props.time().minutes)}:${this.twoDigitTime(this.props.time().seconds)}`}
      </div>
    )
  }
}

export default DisplayTimer
