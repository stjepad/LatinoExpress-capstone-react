import React, { Component } from "react"
import NavBarForm from './navBar/NavBarForm'
import Establishment from './establishment/Establishment'
import Messages from './messages/Message'


class MainView extends Component {



    render() {
        return (
            <React.Fragment>


                <Establishment {...this.props}/>
                <Messages {...this.props}/>

            </React.Fragment>
        )
    }
}

export default MainView