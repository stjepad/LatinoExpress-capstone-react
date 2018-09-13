import React, { Component } from 'react';
import './App.css';
import ApplicationViews from './components/applicationViews'
import NavBarForm from './components/navBar/NavBarForm'

class App extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

  render() {
    return (

      <React.Fragment>
        <NavBarForm/>
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default App;


