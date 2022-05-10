import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    timerVal: 25,
    secondsLeft: '00',
    minutesLeft: 25,
  }

  onTogglePlayPause = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  decreaseTimerValue = () => {
    this.setState(prevState => ({
      timerVal: prevState.timerVal - 1,
      minutesLeft: prevState.timerVal - 1,
    }))
  }

  increaseTimerValue = () => {
    this.setState(prevState => ({
      timerVal: prevState.timerVal + 1,
      minutesLeft: prevState.timerVal + 1,
    }))
  }

  render() {
    const {isTimerRunning, timerVal, secondsLeft, minutesLeft} = this.state

    const showStart = () => (
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={this.onTogglePlayPause}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
            alt="play icon"
            className="button-img"
          />
        </button>
        <p className="button-description">Start</p>
      </div>
    )

    const showPause = () => (
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={this.onTogglePlayPause}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
            alt="pause icon"
            className="button-img"
          />
        </button>
        <p className="button-description">Pause</p>
      </div>
    )

    return (
      <div className="bg-container">
        <h1 className="timer-heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-card">
            <p className="timer">
              {minutesLeft}:{secondsLeft}
            </p>
            <p className="timer-status">Paused</p>
          </div>
        </div>
        <div className="timer-button-container">
          {isTimerRunning ? showPause() : showStart()}

          <div className="button-container">
            <button type="button" className="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="button-img"
              />
            </button>
            <p className="button-description">Reset</p>
          </div>
        </div>
        <p className="set-timer">Set Timer Limit </p>
        <div className="set-timer-button-container">
          <button
            type="button"
            className="alter-timer-button"
            onClick={this.decreaseTimerValue}
          >
            -
          </button>
          <p className="new-timer-value">{timerVal}</p>
          <button
            type="button"
            className="alter-timer-button"
            onClick={this.increaseTimerValue}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
