import React, { Component } from 'react';
import ListDemo from './router/List'
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import {Link,BrowserRouter,Switch, Route} from 'react-router-dom';



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListDemo} />
          <Route exact path="/list" component={ListDemo} />
        </Switch>
      </BrowserRouter>
    
    );
  }
}

export default App;
