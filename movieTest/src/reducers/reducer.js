const initialState = {
    isLoading: false,
    hasError: false,
    orignalMovieList: true,
    matchedMovie: {},
    movie: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIE_LOADING':
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case 'MOVIE_FETCH_DATA_SUCCESS':
            return Object.assign({}, state, {
                movie: state.movie.concat(action.movie),
                orignalMovieList: true
            })
        case 'MOVIE_HAVE_ERROR':
            return Object.assign({}, state, {
                hasError: action.hasError
            })
        case 'MOVIE_SEARCH_RESULT':
            const matchedTitle = state.movie.length > 0 ? state.movie.filter((data) => {
                let movieTitle = data.movie_title;
                return movieTitle.toLowerCase().indexOf(action.searchValue) !== -1;
            }) : ''
            return Object.assign({}, state, {
                matchedMovie: matchedTitle,
                orignalMovieList: false
            })
        case 'FILTER_SEARCH_RESULT':
            const filterMovie = state.movie.length > 0 ? state.movie.filter((data) => {
                let movieLang = data.language;
                return movieLang.indexOf(action.selectedFilter) !== -1;
            }) : ''
            return Object.assign({}, state, {
                matchedMovie: filterMovie,
                orignalMovieList: false
            })
        default:
            return state;
    }
}

export default reducer;