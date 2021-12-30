import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
  render() {
    return (
      <>
        <div id="education" className="container">
          <h2 className="section-header">Education</h2>
          <div className="entry row">
            <div className="entry-image col s2">
              <img className="responsive-img" src={process.env.PUBLIC_URL + "/uiuc.png"} alt="UIUC"/>
            </div>
            <div className="entry-subtitle col s10">
              <h3>University of Illinois at Urbana-Champaign</h3>
              <h4>Bachelor's of Science in Computer Science, Engineering (GPA: 3.90/4.00)</h4>
              <h5>2019 &ndash; 2023</h5>
            </div>
          </div>
          <div className="entry row">
            <div className="entry-image col s2">
              <img className="responsive-img" src={process.env.PUBLIC_URL + "/fr.png"} alt="Fossil Ridge"/>
            </div>
            <div className="entry-subtitle col s10">
              <h3>Fossil Ridge High School</h3>
              <h4>High School Diploma</h4>
              <h5>2015 &ndash; 2019</h5>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Education;
