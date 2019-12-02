import React from 'react';
import Result from './Result';
import Context from '../Context';

export default class Results extends React.Component {
    state = {
        resultsPresent: false
    }

    static contextType = Context;

    render() {

        const { results } = this.context.results

        return(
            console.log(results)
            <div>
                {results.map(result => (
                    <Result name = {results.name} />
                ))}
            </div>
        );
    }
}