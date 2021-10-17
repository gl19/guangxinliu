import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GalleryImage.css';

class GalleryImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
            poster: ''
		};
	}

	componentDidMount() {
		// https://javascript.plainenglish.io/how-to-use-materialize-css-modal-in-react-53f9c85ba40d
        if (this.props.show.hasOwnProperty('poster_path') && this.props.show.poster_path !== null) {
			this.setState({ poster: "https://image.tmdb.org/t/p/w185" + this.props.show.poster_path });
		} else {
			this.setState({ poster: process.env.PUBLIC_URL + "image.svg" });
		}
  	}

	render() {
		return (
			<>
                <a href={"https://www.themoviedb.org/tv/" + this.props.show.id + "?language=en-US" }><img className="gallery-image center" alt="poster" src={ this.state.poster }/></a>
		    </>
		)
	}
}

GalleryImage.propTypes = {
    show: PropTypes.object
};

export default GalleryImage;