import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListRow from '../List/ListRow';
import './Searchbar.css';

class Searchbar extends Component {
	// {"page":1,"":[{"name":"anime","id":210024},{"name":"based on anime","id":222243},{"name":"live action remake of anime","id":271606},{"name":"anime inspired","id":279976},{"name":"anime side story for live-action","id":284517},{"name":"live action anime","id":285442},{"name":"children's-anime","id":285511}],"total_pages":1,"total_":7}
	// Genre: Animation: 16, 
	state = {
		listRows: [],
		searchTerm: ''
	}

	resetTerm = () => {
		this.setState({
			listRow: [],
			searchTerm: ''
		});

		this.handleSearch('');
	}

	addRow = (listRow) => {
		if (!this.state.listRows.includes(listRow)) {
			this.setState(prevState => ({
				listRows: [...prevState.listRows, listRow]
			}));
		}
	};

	handleTerm = (term) => {
		this.setState({
			searchTerm: term
		});
		
		this.setState({
			listRows: []
		});

		if (term.length > 0) {
			this.handleSearch(term);
		}
	}

	handleSearch = (term) => {
		const API_KEY = 'b3c85f39e0ea0f1ae6816957a18f7b9d';
		const type = "search/multi";
		const lang = "en-US";
		const fTerm = encodeURIComponent(term.trim());

		console.log(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=${ lang }&query=${ fTerm }&page=1`);
		axios.all([
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=${ lang }&query=${ fTerm }&page=1`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=${ lang }&query=${ fTerm }&page=2`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=${ lang }&query=${ fTerm }&page=3`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=${ lang }&query=${ fTerm }&page=4`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=${ lang }&query=${ fTerm }&page=5`)
		])
		.then(res => {
			console.log(res);
			
			for (let i = 0; i < 5; i++) {
				console.log(term);
				console.log(i);
				console.log(res[i].data);
				if (res[i].data.hasOwnProperty('results')) {		
					res[i].data['results'].forEach((row) => {						
						if (row.hasOwnProperty('genre_ids') && row.genre_ids.includes(16) &&
								row.hasOwnProperty('original_language') && row.original_language === "ja") {
							console.log(row);
							row.poster = "https://image.tmdb.org/t/p/w185" + row.poster_path;
							const listRow = <ListRow key={row.id} show={row}/>;
							this.addRow(listRow);
						}
					});
				}
			}
		})
	}

	render() {
		return (
			<>
				<div className="searchbar container center">
					<Link to="/home"><img className="logo" src={process.env.PUBLIC_URL + "/anisearchit!.png"} alt="AniSearchIt!" /></Link>
					<div className="input-field">
						<input id="search" placeholder="Search Anime Titles" type="search" value={ this.state.searchTerm } onChange={ (e) => { this.handleTerm(e.target.value); }} />
					</div>
					<p>Don't know what to watch? Check out the seasonal anime!</p>
				</div>
				<div className="list container row">
					{ this.state.listRows }
				</div>
			</>
		)
	}
}

export default Searchbar;
