import axios from 'axios'
import { movieLoading, movieFetchDataSuccess, movieHaveError, movieSearchResult, filterSearchResult } from '../actions/actions'

export function makeApiCall() {
    return (dispatch) => {
        dispatch(movieLoading(true));

        axios.get('http://starlord.hackerearth.com/movieslisting')
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(movieLoading(false));
                return response;
            })
            .then((response) => dispatch(movieFetchDataSuccess(response.data)))
            .catch(() => dispatch(movieHaveError(true)));
    };
}

export function getSearchResult(searchValue) {
    return (dispatch) => {
        dispatch(movieSearchResult(searchValue));
    };
}

export function getFilterResult(selectedFilter) {
    return (dispatch) => {
        dispatch(filterSearchResult(selectedFilter));
    };
}