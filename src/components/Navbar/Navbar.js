import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import './Navbar.css';

// Some starter code taken from
// https://www.youtube.com/watch?v=I2UBjN5ER4s
class Navbar extends Component {
  // https://materializecss.com/dropdown.html
  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      constrainwidth: false,
      coverTrigger: false,
      hover: true,
      alignment: 'right'
    });
  }

  render() {
    return (
      <>
        <nav className="navbar black">
          <div className="navbar-wrapper container">
            <Link to="/" className="brand-logo left"><img className="brand-image" src={process.env.PUBLIC_URL + "/anisearchit!color.png"} alt="AniSearchIt!" /></Link>
            <ul id="dropdown" className="right">
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Menu<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>

            <ul id='dropdown1' className='dropdown-content black'>
              <li className="dropdown-option"><Link to="/">Home</Link></li>
              <li className="dropdown-option"><Link to="/search">Search</Link></li>
              <li className="dropdown-option"><Link to="/gallery">Popular</Link></li>
            </ul>            
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar