import React, { Component } from 'react';
// import './App.css';
// import ApplicationViews from './components/ApplicationViews'
// import NavBarForm from './components/navBar/NavBarForm'
import Login from './components/login/Login'
import App from './App'
import { Route } from 'react-router-dom'

class LatinoExpress extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

  render() {
    return (

      <React.Fragment>
        {
        !this.isAuthenticated() &&
                // <Route exact path="/login" component={Login} />
                <Route exact path="/login" render={(props) => {
                  return <Login {...props} />
              }} />
        }
        {
        <App isAuthenticated={this.isAuthenticated}/>
        }
      </React.Fragment>
    );
  }
}

export default LatinoExpress;