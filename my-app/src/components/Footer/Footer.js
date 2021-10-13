import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="page-footer black">
					<div className="footer-copyright black">
						<div className="container left">
							<p className="grey-text text-darken-3">AniSearchIt!</p>
							<p className="grey-text text-darken-3">Powered by TMDB</p>
						</div>
					</div>
				</footer>
			</div>
		)
	}
}

export default Footer;