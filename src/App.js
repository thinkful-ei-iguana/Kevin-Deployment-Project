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
    }
  }

  setResult = (results) => {
    console.log(results)
    this.setState(prevState => ({
      results: [...prevState.results, results]
    }))    
  }

  clearState = () => {
    this.setState({
      results: [],
    })
  }

  fetchResults = (url) => {
    fetch(url, { method: "GET" })
      .then(response => {
        console.log(response)
        if(!response.ok) {
          console.log("An error has occured");
          throw new Error ("Please try again.")
        } return response.json();
      })
      .then(response => {
        console.log(response)
        let jsonResponse = response
        console.log(jsonResponse)
        return jsonResponse.results
      })
      .then(response => {
        this.setResult((response))
      })
      .catch(err => {
        console.log("Handling error:", err)
      });
  };

  render() {
    console.log(this.state.results)
    const contextValue = {
      results: this.state.results,
      clear: this.clearState,
      api: this.fetchResults,
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