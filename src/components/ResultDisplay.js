import React from "react";
import Context from "../Context";
import Results from "./Results";


export default class ResultDisplay extends React.Component {
    static contextType = Context
    
    render() {
        return(
            <div>
                {this.context.results.map(result => (
                    <Results name={result.name} />
                ))}
            </div>
        )
    }
}