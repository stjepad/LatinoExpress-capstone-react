import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import login from './components/login/Login';
import './App.css';
import ApplicationViews from './components/ApplicationViews'

class App extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

  render() {
    return (

      <React.Fragment>
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default App;


