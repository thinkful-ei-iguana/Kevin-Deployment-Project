import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Context from './Context';
import Header from './components/Header';
import HomeView from './components/HomeView';
import NotFound from './components/NotFound';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      url: null
    }
  }

  setResult = (results) => {
    this.setState({
      results: [...this.state.results, ...results]
    })
  }

  clearState = () => {
    this.setState({
      results: [],
      url: null
    })
  }

  setUrl = (filter, query) => {
    const searchUrl = `https://swapi.co/api/${filter}/?=${query}`
    this.setState({
      url: searchUrl
    })
  }

  fetchResults = (url) => {
    return fetch(url, { method: "GET" })
      .then(response => {
        if(!response.ok) {
          console.log("An error has occured");
          throw new Error ("Please try again.")
        } return response;
      })
      .then(response => response.json())
      .then(response => this.setResult((response)))
      .catch(err => {
        console.log("Handling error:", err)
      });
  };

  render() {

    const contextValue = {
      results: this.state.results,
      clear: this.clearState,
      api: this.fetchResults
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