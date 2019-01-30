export function movieLoading(bool) {
    return {
        type: 'MOVIE_LOADING',
        isLoading: bool
    }
}

export function movieFetchDataSuccess(movie) {
    return {
        type: 'MOVIE_FETCH_DATA_SUCCESS',
        movie
    };
}

export function movieHaveError(bool) {
    return {
        type: 'MOVIE_HAVE_ERROR',
        hasError: bool
    };
}

export function movieSearchResult(searchValue) {
    return {
        type: 'MOVIE_SEARCH_RESULT',
        searchValue
    };
}

export function filterSearchResult(selectedFilter) {
    return {
        type : 'FILTER_SEARCH_RESULT',
        selectedFilter
    };
}