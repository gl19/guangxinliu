import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Me from './components/Me/Me';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="middle">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/me" exact component={ Me } />
            <Route path="/education" exact component={ Education } />
            <Route path="/experience" exact component={ Experience } />
          </Switch>
        </Router>
        <main />
      </div>
    );
  }
}

export default App;
