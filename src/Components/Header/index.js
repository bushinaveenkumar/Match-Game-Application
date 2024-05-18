import {Component} from 'react'
import './index.css'

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const {countdownremaing, Score} = this.props
    return (
      <div className="header">
        <div>
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          />
        </div>
        <ul className="navItemsList">
          <li className="nav-item">
            <p>Score:{Score}</p>
          </li>
          <li className="nav-item-countdown">
            <span>
              <img
                className="timer-Img"
                alt="timer"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              />
            </span>
            <p className="nav-item">{countdownremaing} sec</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
