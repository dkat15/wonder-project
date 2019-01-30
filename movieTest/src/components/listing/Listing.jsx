import React from 'react'
import { render } from 'react-dom'
import SearchBox from './SearchBox'
import FilterBox from './FilterBox'

export default class Listing extends React.Component {
    // constructor(props) {
    //     super(props);
        // this.state = { movieTitle: {}, moviePopularity: {}, movieYear: {}, movieLanguage: {} };
        // this.showList = this.showList.bind(this);
    // }

    componentDidMount() {
        this.props.fetchMovieData();
    }

    render() {
        const movieData = this.props.orignalMovieList ? this.props.movie : this.props.matchedMovie;
        const listMovie = movieData.map((movie) => {
            return (
                <div style={{ width: '150px', float: 'left' }}>
                    <div>
                        <h4><b>{movie.movie_title}</b></h4>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {movieData && <FilterBox placeholder='Language' movieData={movieData} fetchFilterMovies={this.props.fetchFilterMovies} />}
                <label>Search Movie</label>
                <SearchBox fetchSearchResults={this.props.fetchSearchResults} />
                {listMovie}
            </div>
        )
    }
}