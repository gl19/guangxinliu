import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListRow from '../List/ListRow';
import './Searchbar.css';

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listRows: [],
			searchTerm: '',
			sort: 1
		}
	}

	resetTerm = () => {
		this.setState({
			listRows: [],
			searchTerm: ''
		});

		this.handleSearch('');
	}

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

	handleSort = (e) => {
		if (e.target.checked) {
			this.setState({
				sort: -1
			});
		} else {
			this.setState({
				sort: 1
			});
		}

		if (this.state.searchTerm.length > 0) {
			this.handleSearch(this.state.searchTerm);
		}
	}

	handleSearch = (term) => {
		this.setState({
			listRows: []
		});

		const API_KEY = 'b3c85f39e0ea0f1ae6816957a18f7b9d';
		const type = "search/multi";
		const fTerm = encodeURIComponent(term.trim());
		
		axios.all([
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=en-US&query=${ fTerm }&page=1`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=en-US&query=${ fTerm }&page=2`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=en-US&query=${ fTerm }&page=3`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=en-US&query=${ fTerm }&page=4`),
			axios.get(`https://api.themoviedb.org/3/${ type }?api_key=${ API_KEY }&language=en-US&query=${ fTerm }&page=5`)
		])
		.then(res => {
			let keySet = new Set();
			let newListRows = [];
			let showObjects = [];
			for (let i = 0; i < 5; i++) {
				if (res[i].data.hasOwnProperty('results')) {
					res[i].data['results'].forEach((row) => {						
						if (row.hasOwnProperty('genre_ids') && row.genre_ids.includes(16) &&
								row.hasOwnProperty('original_language') && row.original_language === "ja") {
							showObjects.push(row);
						}
					});
				}
			}

			if (this.state.sort === 1) {
				showObjects.sort(function(a, b) {
					var popA = a.popularity;
					var popB = b.popularity;
					if (popA < popB) {
						return -1;
					}
		
					if (popA > popB) {
						return 1;
					}
				
					return 0;
				});
			} else {
				showObjects.sort(function(a, b) {
					var popA = a.popularity;
					var popB = b.popularity;
					if (popA < popB) {
						return 1;
					}
		
					if (popA > popB) {
						return -1;
					}
				
					return 0;
				});
			}

			for (let i = 0; i < showObjects.length; i++) {
				let row = showObjects[i];
				if (!keySet.has(row.id)) {
					const listRow = <ListRow className="show-desc" key={i} shows={showObjects} idx={i}/>;
					newListRows.push(listRow);
					keySet.add(row.id);
				}
			}

			this.setState({
				listRows: newListRows
			});
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
					<p>Don't know what to watch? Check out the popular anime!</p>
					<div className="switch">
						<label>Less Popular<input type="checkbox" onChange={ e => this.handleSort(e) } /><span className="lever pink lighten-3"></span>More Popular</label>
					</div>
				</div>
				<div className="list container row">
					{ this.state.listRows }
				</div>
			</>
		)
	}
}

export default Searchbar;
