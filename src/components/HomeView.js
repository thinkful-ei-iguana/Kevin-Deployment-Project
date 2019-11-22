import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results';

export default class HomeView extends React.Component {
    
    render() {
        return(
            <div className="wrapper">
                <section>
                    <SearchForm />
                </section>
                <section>
                    <Results />
                </section>
            </div>
        )
    }
}