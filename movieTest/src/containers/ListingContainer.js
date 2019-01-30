import React from 'react'
import { connect } from 'react-redux'
import Listing from '../components/listing/Listing'
import { makeApiCall, getSearchResult, getFilterResult } from '../utils/utils'

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        hasError: state.movieHaveError,
        isLoading: state.movieAreLoading,
        matchedMovie: state.matchedMovie,
        orignalMovieList: state.orignalMovieList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieData: () => dispatch(makeApiCall()),
        fetchSearchResults: (searchValue) => dispatch(getSearchResult(searchValue)),
        fetchFilterMovies: (selectedFilter) => dispatch(getFilterResult(selectedFilter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);