import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <React.Fragment>
      <header className='header max-width'>
        <div>
          <img src={logo} alt="" />

          <nav>
            <ul>
              <li>
                <button>
                  Features
                </button>
              </li>
              <li>
                <button>
                  Pricing
                </button>
              </li>
              <li>
                <button>
                  Resources
                </button>
              </li>
            </ul>
          </nav>

        </div>

        <ul>
          <li>
            <button>
              Login
            </button>
          </li>
          <li>
            <button className='btn-cta rounded-full'>
              Sign Up
            </button>
          </li>
        </ul>
        
      </header>
    </React.Fragment>
  )
}

export default Header