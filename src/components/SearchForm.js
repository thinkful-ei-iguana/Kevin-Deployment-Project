import React from 'react';
import Context from '../Context';

export default class SearchForm extends React.Component {
    state = {
        query: "",
        filter: ""
    }

    static contextType = Context;

    validateQuery = () => {
        const searching = this.state.query.trim();
        if (searching.length === 0) {
            return "Please select a search filter."
        }
    }

    validateFilter = () => {
        const query = this.state.filter.trim();
        if (query.length === 0) {
            return "Please enter a search term."
        }
    }

    render() {

        const { addResult } = this.context;
        const { addSearch } = this.context;
        const { addFilter } = this.context;

        return(
            <form 
                onSubmit={event => {
                    event.preventDefault();
                    addResult(this.state);
                }}
            >
                <label htmlFor="search-term">
                    Search the galaxy: 
                </label>
                <input
                    type="text"
                    id="search-term"
                    onChange={event => {
                        addSearch(event.target.value)
                    }}
                    required
                />
                <label htmlFor="search-filter">
                    Find: 
                </label>
                <select
                    id="search-filter"
                    onChange={event => {
                        addFilter(event.target.value)
                    }}
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