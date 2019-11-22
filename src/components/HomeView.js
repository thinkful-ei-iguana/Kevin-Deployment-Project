import React from 'react';
import Context from '../Context';
import SearchForm from './SearchForm';
import Results from './Results';

export default class HomeView extends React.Component {
    static contextType = Context;
    
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