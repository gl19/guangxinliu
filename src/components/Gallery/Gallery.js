import React, { Component } from 'react';
import axios from 'axios';
import GalleryImage from './GalleryImage';
import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
		super(props);
		this.state = {
			images: []
		}
	}

    addImage(image) {
        this.setState(prevState => ({
            images: [...prevState.images, image]
        }));
    }

    handleSearch = (term) => {
        this.setState({
            images: []
        });

		const API_KEY = 'b3c85f39e0ea0f1ae6816957a18f7b9d';
        
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_keywords=210024&with_genres=${term}`)
		.then(res => {
            res.data['results'].forEach((row) => {			
                const image = <GalleryImage className="gallery-image" key={row.id} show={row}/>;
                this.addImage(image);
            });
		})
	}

    componentDidMount() {
        this.handleSearch('');
    }

    render() {
        return (
            <>
                <div className="container">
                    <div id="filters" className="center">
                        <div id="genre-menu" className="row">
                            <div className="col center-align">
                                <button className="filter waves-effect waves-light btn pink lighten-3" 
                                    onClick={() => this.handleSearch('')}>Most Popular</button>
                            </div>
                            <div className="col center-align">
                                <button className="filter waves-effect waves-light btn pink lighten-3"
                                    onClick={() => this.handleSearch('35')}>Comedy</button>
                            </div>
                            <div className="col center-align">
                                <button className="filter waves-effect waves-light btn pink lighten-3"
                                    onClick={() => this.handleSearch('18')}>Drama</button>
                            </div>
                            <div className="col center-align">
                                <button className="filter waves-effect waves-light btn pink lighten-3"
                                    onClick={() => this.handleSearch('9648')}>Mystery</button>
                            </div>
                            <div className="col center-align">
                                <button className="filter waves-effect waves-light btn pink lighten-3"
                                    onClick={() => this.handleSearch('10749')}>Romance</button>
                            </div>
                        </div>
                        <div id="Gallery" className="center">
                            { this.state.images }
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Gallery;