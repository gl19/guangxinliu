import React, { Component } from 'react';
import './Me.css';

class Me extends Component {
  render() {
    return (
      <>
        <div id="content" className="row">
          <div id="profile" className="center-align col s4">
            <img id="profile-picture" className="circle center-align responsive-img" src={process.env.PUBLIC_URL + "/face1.png"} alt="Guangxin Liu"></img>
            <h1 className="white-text">Guangxin Liu</h1>
            <div className="separator"/>
            <div className="row center-align">
              <a className="col s2 offset-s3" href="https://www.facebook.com/guangxin.liu19/">
                <img className="responsive-img icon" src={process.env.PUBLIC_URL + "/facebook-50.svg"} alt="Facebook"/>
              </a>
              <a className="col s2" href="https://www.linkedin.com/in/guangxin-liu/">
                <img className="responsive-img icon" src={process.env.PUBLIC_URL + "/linkedin-50.svg"} alt="LinkedIn"/>
              </a>
              <a className="col s2" href="https://github.com/gl19">
                <img className="responsive-img icon" src={process.env.PUBLIC_URL + "/github-50.svg"} alt="GitHub"/>
              </a>
            </div>
          </div>
          <div id="about" className="col s8">
            <h4>About Me</h4>
            <p>Hello, my name is Guangxin Liu and I am a current junior in Computer Science at the University of Illinois. I am pursuing my bachelor's degree and hope to graduate after the 2022 fall semester. I am passionate about learning more about my field and having hands-on experience.</p>
            <p>I am originally from Fort Collins, Colorado, but I'll be living in Chicago for the Spring 2022 semester.</p>
            <p>For the most comprehensive and up-to-date information about me, visit my <a href="https://www.linkedin.com/in/guangxin-liu/">LinkedIn</a>. For a copy of my resume, you can contact me directly, on LinkedIn or by email.</p>
          </div>
        </div>
      </>
    )
  }

}

export default Me;
