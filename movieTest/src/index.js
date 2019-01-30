import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer'
import App from './components/app'
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)