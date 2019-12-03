import React from 'react';
import Context from '../Context';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            filter: ""
        }
    }
    static contextType = Context;

    updateQuery = (newQuery) => {
        this.setState({
            query: newQuery
        })
    }

    validateQuery = () => {
        const searching = this.state.query.trim();
        if (searching.length === 0) {
            return "Please select a search filter."
        }
    }

    updateFilter = (newFilter) => {
        this.setState({
            filter: newFilter
        })
    }

    validateFilter = () => {
        const query = this.state.filter.trim();
        if (query.length === 0) {
            return "Please enter a search term."
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.context.clear();
        this.context.api(
            this.state.filter.value,
            this.state.query.value
        )
        this.setState({
            query: "",
            filter: ""
        })
    }

    render() {

        return(
            <form 
                onSubmit={event => this.handleSubmit(event)}
            >
                <label htmlFor="search-term">
                    Search the galaxy: 
                </label>
                <input
                    type="text"
                    id="search-term"
                    onChange={event => {
                        this.updateQuery(event.target.value)
                    }}
                    required
                />
                <label htmlFor="search-filter">
                    Find: 
                </label>
                <select
                    id="search-filter"
                    onChange={event => {
                        this.updateFilter(event.target.value)
                    }}
                    required
                >
                    <option value="">Choose one</option>
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