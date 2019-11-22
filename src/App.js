import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeView from './components/HomeView';
import NotFound from './components/NotFound';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchThrough: "",
      searchFor: ""
    }
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeView} />

          <Route component={NotFound} />
        </Switch>
      </main>
    )

  }
}