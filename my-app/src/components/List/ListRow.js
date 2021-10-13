import React, { Component } from 'react';
import './ListRow.css';

class ListRow extends Component {
	state = {
		title: '',
		originalTitle: '',
		poster: ''
	}

	componentDidMount() {
    if (this.props.show.hasOwnProperty('title')) {
			this.setState({ title: this.props.show.title });
		} else if (this.props.show.hasOwnProperty('name')) {
			this.setState({ title: this.props.show.name });
		}

		if (this.props.show.hasOwnProperty('original_title')) {
			this.setState({ originalTitle: this.props.show.original_title });
		}

		if (this.props.show.hasOwnProperty('poster')) {
			this.setState({ poster: this.props.show.poster });
		}

		if (this.props.show.hasOwnProperty('overview')) {
			this.setState({ overview: this.props.show.overview });
		}
  }

	render() {
		return (
			<div className="listrow row container">
				<div className="preview col s5 m3">
					<img className="poster" alt="poster center-align" src={ this.state.poster }/>
				</div>
				<div className="col s7 m9">
					<h4>{ this.state.title }</h4>
					<p className="original-title truncate">{ this.state.originalTitle }</p>
					<p className="overview">{ this.state.overview }</p>
				</div>
			</div>
		)
	}
}

export default ListRow;