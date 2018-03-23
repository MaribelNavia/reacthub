import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';

import AllRepos from './Components/AllRepos';

import './App.css';



class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/users' component={AllRepos} />
      </Switch>
    );
  }
}

export default App;
