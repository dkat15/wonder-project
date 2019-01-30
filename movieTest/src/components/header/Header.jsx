import React from 'react'
import { render } from 'react-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div style={{
                padding: '25px',
                textAlign: 'center',
                fontSize: '35px'
            }}
            >
                React 
            </div>
        )
    }
}