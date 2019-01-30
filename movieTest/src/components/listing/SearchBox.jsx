import React from 'react'
import { render } from 'react-dom'

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: '', matchedTitle: '', showSuggestion: false };
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    componentDidMount() {
        this.searchInput.focus();
    }

    onHandleChange() {
        this.setState({ searchValue: this.searchInput.value.toLowerCase() });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.fetchSearchResults(this.state.searchValue);
                }}>
                    <input
                        ref={input => this.searchInput = input}
                        onChange={this.onHandleChange}
                    />
                </form>
            </div>
        )
    }
}