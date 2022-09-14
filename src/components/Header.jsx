import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div>
          <img src={logo} alt="" />

          <nav>
            <ul>
              <li><button>Features</button></li>
              <li><button>Pricing</button></li>
              <li><button>Resources</button></li>
            </ul>
          </nav>

        </div>
      </header>

      <ul>
        <li><button>Login</button></li>
        <li><button className='btn-auth'>Sign Up</button></li>
      </ul>
    </React.Fragment>
  )
}

export default Header