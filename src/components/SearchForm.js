import React from 'react';

export default class SearchForm extends React.Component {
    state = {
        searchThrough: "",
        searchFor: ""
    };

    setSearchThrough = (select) => {
        this.setState({
            searchThrough: select
        })
    }

    setSearchFor = (query) => {
        this.setState({
            searchFor: query
        })
    }

    validateSearchThrough = () => {
        const searching = this.state.searchThrough.trim();
        if (searching.length === 0) {
            return "Please select a search filter."
        }
    }

    validateSearchFor = () => {
        const query = this.state.searchFor.trim();
        if (query.length === 0) {
            return "Please enter a search term."
        }
    }

    render() {
        return(
            <form 
                onSubmit={event => {
                    event.preventDefault();
                }}
            >
                <label htmlFor="search-term">
                    Search the galaxy: 
                </label>
                <input
                    type="text"
                    id="search-term"
                    onChange={event => {
                        this.setSearchFor(event.target.value)
                    }}
                    required
                />
                <label htmlFor="search-filter">
                    Find: 
                </label>
                <select
                    id="search-filter"
                    onChange={event => {
                        this.setSearchThrough(event.target.value)
                    }}
                    required
                >
                    <option value="">Everything</option>
                    <option value="films">Films</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Other vehicles</option>
                </select>
                <button>Submit</button>
            </form>
        )
    }
}