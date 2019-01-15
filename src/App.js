import React, { Component } from 'react';
import './App.css';
import ApplicationViews from './components/ApplicationViews'
import { Redirect} from 'react-router-dom'

export default class App extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

  render() {
    return (

      <React.Fragment>
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <NavBarForm/> */}
        {this.props.isAuthenticated() &&
        <ApplicationViews />
        }
        {
          !this.props.isAuthenticated() &&
          <Redirect to="/login"/>
        }
      </React.Fragment>
    );
  }
}

// export default App;


