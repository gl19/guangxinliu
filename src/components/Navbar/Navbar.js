import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav id="navbar">
          <div className="navbar-wrapper container">
            <Link to="/me" className="brand-logo left">Guangxin Liu</Link>
            <ul id='dropdown1' className='right'>
              <li><Link to="/me">Me</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/experience">Experience</Link></li>
            </ul>            
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar