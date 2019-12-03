import React from 'react';
import SearchForm from './SearchForm';
import ResultDisplay from './ResultDisplay';

export default function HomePage(props) {
    
    return(
        <div className="wrapper">
            <section>
                <SearchForm />
            </section>
            <section>
                <ResultDisplay />
            </section>
        </div>
    )
}