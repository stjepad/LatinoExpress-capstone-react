import React, { Component } from "react"
import Login from './login/Login'
import { Route, Redirect} from 'react-router-dom'
import NavBarForm from './navBar/NavBarForm'
import establishments from './establishment/Establishment'
import establishmentManager from '../modules/establishmentsManager'
import MainView from './MainView'
import EstablishmentCard from "./establishment/EstablishmentCard";


export default class ApplicationViews extends Component {

    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

    state = {
        establishments: [],
        messages: []
    }
    componentDidMount() {
    establishmentManager.getAll().then(allEstablishments => {
        // console.log(allLocations)
        this.setState({
            establishments: allEstablishments
        })
    })
    }

    render() {

        return (

            <React.Fragment>
            <Route exact path="/" render={(props) => {
                if (this.isAuthenticated()) {
                    return <MainView {...props} messages={this.state.messages} establishments={this.state.establishments} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/mainview" render={(props) => {
                if (this.isAuthenticated()) {
                    return <MainView {...props} messages={this.state.messages} establishments={this.state.establishments}/>
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/establishments/:establishmentId(\d+)" render={(props) => {
                        return <EstablishmentCard {...props} establishments={this.state.establishments} />
                    }} />

        </React.Fragment>
        )

    }
}

