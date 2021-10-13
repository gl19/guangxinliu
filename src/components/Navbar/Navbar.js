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
    M.Dropdown.init(elems, {});
  }

  render() {
    return (
      <>
        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
          <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
        </ul>

        <nav className="navbar black">
          <div className="navbar-wrapper container">
            
            {/* <button className='dropdown-trigger btn' href='#' data-target='dropdown1'>
              <div className="valign-wrapper">
                <i className="material-icons">menu</i>
              </div>
            </button> */}
            <Link to="/" className="brand-logo left"><img className="brand-image" src={process.env.PUBLIC_URL + "/anisearchit!.png"} alt="AniSearchIt!" /></Link>
            <ul id="dropdown" className="right">
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Menu<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
            
            {/* <div className="bar-menu" onClick={handleMenuClick} >
              <i className={menuClick ? "fas fa-ellipsis-v" : "fas fa-ellipsis-h"}></i>
            </div> */}
            
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar