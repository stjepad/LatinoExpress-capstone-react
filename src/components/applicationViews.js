import React, { Component } from "react"
import Login from './login/Login'
import { Route} from 'react-router-dom'

export default class ApplicationViews extends Component {

    render() {

        return (
            <React.Fragment>
                <Route exact path="/login" component={Login} />
            </React.Fragment>

        )

    }
}