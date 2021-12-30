import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <>
        <div id="experience" className="container">
          <h2 className="section-header">Experience</h2>
          <div className="entry row">
            <div className="entry-image col s2">
              <img className="responsive-img" src={process.env.PUBLIC_URL + "/uber.png"} alt="Uber Freight"/>
            </div>
            <div className="col s10">
              <div className="entry-subtitle">
                <h3>Software Engineer Intern</h3>
                <h4>Uber Freight</h4>
                <h5>January 2022 &ndash; Present</h5>
              </div>
            </div>
          </div>
          <div className="entry row">
            <div className="entry-title">
              <h2>eLearning at Gies College of Business</h2>
            </div>
            <div className="entry-image col s2">
              <img className="responsive-img" src={process.env.PUBLIC_URL + "/gies.png"} alt="Gies College"/>
            </div>
            <div className="col s10">
              <div className="entry-subtitle">
                <h3>Senior HTML and Accessability Specialist</h3>
                <h5>August 2021 &ndash; December 2021</h5>
              </div>
              <ul className="browser-default">
                <li>Trained new hires, created internal materials, and gave workshops to maintain best accessibility practices.</li>
                <li>Developed Python scripts and applications for automating processes.</li>
              </ul>
              <div className="entry-subtitle">
                <h3>HTML and Accessability Specialist</h3>
                <h5>December 2020 &ndash; August 2021</h5>
              </div>
              <ul className="browser-default">
                <li>Created HTML course content which complied with ADA standards.</li>
              </ul>
            </div>
          </div>
          <div className="entry row">
            <div className="entry-image col s2">
              <img className="responsive-img" src={process.env.PUBLIC_URL + "/ddb.png"} alt="DeveloperDB"/>
            </div>
            <div className="col s10">
              <div className="entry-subtitle">
                <h3>Python Developer Intern</h3>
                <h4>DeveloperDB</h4>
                <h5>June 2021 &ndash; August 2021</h5>
              </div>
              <ul className="browser-default">
                <li>Worked with founder to develop scripts to aggregate developer profiles from dynamic websites.</li>
                <li>Cleaned and analyzed data using Python libraries.</li>
              </ul>
            </div>
          </div>
          <div className="entry row">
            <div className="entry-image col s2">
              <img className="responsive-img" src={process.env.PUBLIC_URL + "/gies.png"} alt="Gies College"/>
            </div>
            <div className="col s10">
              <div className="entry-subtitle">
                <h3>Project Researcher</h3>
                <h4>Disruption Lab at Gies College of Business</h4>
                <h5>Feburary 2020 &ndash; August 2020</h5>
              </div>
              <ul className="browser-default">
                <li>Researched and produced material with graduate students about the efficacy of 3D virtual environments in eLearning programs.</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default Experience;
