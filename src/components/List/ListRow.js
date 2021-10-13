import React, { Component } from 'react';
import M from 'materialize-css';
import './ListRow.css';

class ListRow extends Component {
	constructor(props) {
		super(props);
		this.state = {

			title: '',
			poster: ''
		};

		// this.handleClick = this.handleClick.bind(this);
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

		if (this.props.show.hasOwnProperty('backdrop_path')) {
			document.getElementById(`show-summary-${this.state.id}`).style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://image.tmdb.org/t/p/w185${ this.props.show.backdrop_path }")`; 
		}

    if (this.props.show.hasOwnProperty('title')) {
			this.setState({ title: this.props.show.title });
		} else if (this.props.show.hasOwnProperty('name')) {
			this.setState({ title: this.props.show.name });
		}

		if (this.props.show.hasOwnProperty('original_title')) {
			this.setState({ originalTitle: this.props.show.original_title });
		}

		console.log(this.props.show.poster);
		if (this.props.show.hasOwnProperty('poster_path') && this.props.show.poster_path !== null) {
			this.setState({ poster: "https://image.tmdb.org/t/p/w185" + this.props.show.poster_path });
		} else {
			this.setState({ poster: process.env.PUBLIC_URL + "image.svg" });
		}

		if (this.props.show.hasOwnProperty('overview')) {
			this.setState({ overview: this.props.show.overview });
		}

		this.setState({ id: this.props.show.id });
		this.setState({ type: this.props.show.media_type.charAt(0).toUpperCase() + this.props.show.media_type.slice(1) });
		this.setState({ vote_average: this.props.show.vote_average });
		this.setState({ vote_count: this.props.show.vote_count })
		this.setState({ popularity: this.props.show.popularity })
  }

	render() {
		return (
			<>
			<div id={ "show-summary-" + this.state.id } className="listrow row container">
				<div className="preview col s5 m3">
					<button className="waves-effect waves-light modal-trigger" data-target={ "modal-" + this.state.id }>
						<img className="poster" alt="poster" src={ this.state.poster }/>
					</button>
					<div ref={ Modal => { this.Modal = Modal; } } id={ "modal-" + this.state.id } className="modal">
						<div className="modal-content">
							<h4 className="center">{ this.state.title }</h4>
							<p className="original-title truncate"><i>{ this.state.originalTitle }</i></p>
							<div className="row">
								<img className="poster col s3" alt="poster" src={ this.state.poster }/>
								<p className="col s9">{ this.state.overview }</p>
							</div>
							<div className="metadata row">
								<div className="col s3">
									<ul>
										<li>Type: { this.state.type }</li>
										<li>Popularity: { this.state.popularity }</li>
										<li>Score: &#9733;{ this.state.vote_average }/10</li>
										<li>Votes: { this.state.vote_count }</li>
									</ul>
								</div>
								<div className="col s3">
									
								</div>
							</div>
						</div>
						<div className="modal-footer center">
							<button className="modal-close btn-flat left">Previous</button>
							<button className="modal-close btn-flat right">Next</button>
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

export default ListRow;