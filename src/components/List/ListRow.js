import React, { Component } from 'react';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import './ListRow.css';

class ListRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			poster: process.env.PUBLIC_URL + "image.svg",
			idx: 0,
			shows: []
		};
	}

	setModalContent() {
		let newShow = this.props.shows[this.state.idx]
    	if (newShow.hasOwnProperty('title')) {
			this.setState({ modal_title: newShow.title });
		} else if (newShow.hasOwnProperty('name')) {
			this.setState({ modal_title: newShow.name });
		}

		if (this.props.shows[this.state.idx].hasOwnProperty('original_title')) {
			this.setState({ modal_originalTitle: newShow.original_title });
		}

		if (newShow.hasOwnProperty('poster_path') && newShow.poster_path !== null) {
			this.setState({ modal_poster: "https://image.tmdb.org/t/p/w185" + newShow.poster_path });
		} else {
			this.setState({ modal_poster: process.env.PUBLIC_URL + "image.svg" });
		}

		if (newShow.hasOwnProperty('overview')) {
			this.setState({ modal_overview: newShow.overview });
		}

		this.setState({ modal_type: newShow.media_type });
		this.setState({ modal_vote_average: newShow.vote_average });
		this.setState({ modal_vote_count: newShow.vote_count });
		this.setState({ modal_popularity: newShow.popularity });
	}

	clickNext() {
        if (this.state.idx < this.props.shows.length - 1) {
            this.setState((prevState) => ({
                idx: prevState.idx + 1
            }));

            this.setModalContent();
        }
    }

    clickPrev() {
        if (this.state.idx > 0 ) {
            this.setState((prevState) => ({
                idx: prevState.idx - 1
            }));

            this.setModalContent();
        }
    }

	resetIdx() {
		this.setState({
			idx: this.props.idx
		});
	}

	componentDidMount() {
		// https://javascript.plainenglish.io/how-to-use-materialize-css-modal-in-react-53f9c85ba40d

		const options = {
			inDuration: 250,
			outDuration: 250,
			opacity: 0.5,
			dismissible: true,
			startingTop: "4%",
			endingTop: "10%"
		};

		M.Modal.init(this.Modal, options);
		this.setState({
			idx: this.props.idx
		});

		let show = this.props.shows[this.props.idx];

		if (show.hasOwnProperty('backdrop_path')) {
			document.getElementById(`show-summary-${this.state.id}`).style.backgroundImage = 
				`linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://image.tmdb.org/t/p/w185${ show.backdrop_path }")`; 
		}

    	if (show.hasOwnProperty('title')) {
			this.setState({ 
				title: show.title,
				modal_title: show.title
			});
		} else if (show.hasOwnProperty('name')) {
			this.setState({ 
				title: show.name,
				modal_title: show.name
			});
		}

		if (show.hasOwnProperty('original_title')) {
			this.setState({
				originalTitle: show.original_title,
				modal_originalTitle: show.original_title
			});
		}

		if (show.hasOwnProperty('poster_path') && show.poster_path !== null) {
			this.setState({
				poster: "https://image.tmdb.org/t/p/w185" + show.poster_path,
				modal_poster: "https://image.tmdb.org/t/p/w185" + show.poster_path
			});
		} else {
			this.setState({
				poster: process.env.PUBLIC_URL + "image.svg",
				modal_poster: process.env.PUBLIC_URL + "image.svg"
			});
		}

		if (show.hasOwnProperty('overview')) {
			this.setState({
				overview: show.overview,
				modal_overview: show.overview
			});
		}

		this.setState({ modal_type: show.media_type });
		this.setState({ modal_vote_average: show.vote_average });
		this.setState({ modal_vote_count: show.vote_count });
		this.setState({ modal_popularity: show.popularity });
  	}

	render() {
		return (
			<>
			<div id={ "show-summary-" + this.state.id } className="listrow row container">
				<div className="preview col s5 m3">
					<button className="waves-effect waves-light modal-trigger" data-target={ "modal-" + this.state.idx } onClick={ () => this.resetIdx() } >
						<img className="poster" alt="poster" src={ this.state.poster }/>
					</button>
					<div id={"modal-" + this.state.idx } ref={ Modal => { this.Modal = Modal; } } className="modal">
						<div className="modal-content">
							<h4 className="center">{ this.state.modal_title }</h4>
							<div className="row">
								<img className="poster col s3" alt="poster" src={ this.state.modal_poster }/>
								<p className="col s9">{ this.state.modal_overview }</p>
							</div>
							<div className="metadata row">
								<div className="col s3">
									<ul>
										<li>Type: { this.state.modal_type }</li>
										<li>Popularity: { this.state.modal_popularity }</li>
										<li>Score: &#9733;{ this.state.modal_vote_average }/10</li>
										<li>Votes: { this.state.modal_vote_count }</li>
									</ul>
								</div>
								<div className="col s3">
									
								</div>
							</div>
						</div>
						<div className="modal-footer center">
							<button className="btn-flat left" onClick={ () => this.clickPrev() }>Previous</button>
							<button className="btn-flat right" onClick={ () => this.clickNext() }>Next</button>
						</div>
					</div>
				</div>
				<div className="col s7 m9">
					<h4>{ this.state.title }</h4>
					<p className="original-title truncate"><i>{ this.state.originalTitle }</i></p>
					<p className="overview">{ this.state.overview }</p>
				</div>
			</div>
		</>
		)
	}
}

ListRow.propTypes = {
	shows: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			popularity: PropTypes.number.isRequired,
			media_type: PropTypes.string.isRequired,
			vote_count: PropTypes.number.isRequired,
			vote_average: PropTypes.number.isRequired,
			title: PropTypes.string,
			original_title: PropTypes.string,
			name: PropTypes.string,
			overview: PropTypes.string,
			poster_path: PropTypes.string,
			backdrop_path: PropTypes.string
		})
	),
	idx: PropTypes.number.isRequired
};

ListRow.defaultProps = {
	shows: [],
	idx: 0
}

export default ListRow;