// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

class Header extends Component {
  state = {}

  render() {
    return (
      <div className="header">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
        <Popup
          modal
          trigger={
            <button className="hamburger" type="button">
              <GiHamburgerMenu />
            </button>
          }
          className="popup-content"
        >
          manoj
        </Popup>
      </div>
    )
  }
}
export default Header
