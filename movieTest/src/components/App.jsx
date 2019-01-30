import React from 'react'
import { render } from 'react-dom'
import Header from './header/header'
import ListingContainer from '../containers/ListingContainer'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ListingContainer />
            </div>
        )
    }
}

