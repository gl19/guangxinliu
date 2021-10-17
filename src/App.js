import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import './App.css';

class App extends Component {
  componentDidMount() {
    // https://stackoverflow.com/questions/30198494/how-do-i-cycle-the-background-url-of-a-div-through-several-images
    // https://imgur.com/gallery/IOFRl
    const images = [
      "",
      "4kNLeda.jpeg",
      "2ZcXUIT.png",
      "g7JTjBC.jpeg",
      "YlkVklb.png",
      "Xgpu2yT.jpeg",
      "hJCNB0K.jpeg",
      "lt8syCN.jpeg",
      "ijXHZ91.png",
      "pJHqu9F.jpeg"
    ];

    let randomCount = Math.round(Math.random() * (images.length - 2)) + 1;
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6) 300px, rgba(0, 0, 0, 1) 850px), url(${process.env.PUBLIC_URL}/backgrounds/${images[randomCount]})`; 
  }

  render() {
    return (
      <div id="middle">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ Searchbar } />
            <Route path="/search" component={ Searchbar } />
            <Route path="/home" component={ Searchbar } />
            <Route path="/gallery" component= { Gallery } />
          </Switch>
        </Router>
        <main />
        <Footer />
      </div>
    );
  }
}

export default App;
