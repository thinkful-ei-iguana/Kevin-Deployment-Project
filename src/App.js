import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Context from './Context';
import Header from './components/Header';
import HomeView from './components/HomeView';
import NotFound from './components/NotFound';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchThrough: null,
      searchFor: null,
      results: null
    }
  }

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

  fetchResults = function() {
    let fetchUrl;
    if(this.state.searchFor !== null && this.state.searchThrough === null) {
      fetchUrl=`https://swapi.co/api/`
    }
    return fetch(fetchUrl, { methd: "GET" })
      .then(response => {
        if(!response.ok) {
          console.log("An error has occured");
          throw new Error ("Please try again.")
        } return response;
      })
      .then(response => response.json())
      .then(response => this.setState({results: response}))
      .catch(err => {
        console.log("Handling error:", err)
      })
  }

  render() {

    const contextValue = {
      addResult: this.fetchResults,
      addSearch: this.setSearchFor,
      addFilter: this.setSearchThrough
    }

    return (
      <Context.Provider value={contextValue}>
        <main className='App'>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeView} />

            <Route component={NotFound} />
          </Switch>
        </main>
      </Context.Provider>
    )

  }
}