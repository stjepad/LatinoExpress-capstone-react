import React, { Component } from "react"
import Login from '/login/Login'
import { Route, Redirect} from 'react-router-dom'
import NavBarForm from '/navBar/NavBarForm'
import establishments from '/establishment/Establishment'
import establishmentManager from '../modules/establishmentsManager'
import MainView from './MainView'
import EstablishmentCard from "/establishment/EstablishmentCard";
import MessageManager from '../modules/uniqueMessage';
import MessageEdit from '/messages/MessageEdit';
// import MessageList from './messages/MessageList';
import './ApplicationViews.css';



export default class ApplicationViews extends Component {

    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

    state = {
        establishments: [],
        messages: [],
        allEstablishmentsTypes: [],
        allPaymentTypes: [],
        foodPoints: [],
        tacoPoints: [],
        margaritaPoints: [],
        quesoPoints:[],
        burritoPoints: [],
        salsaPoints: []
    }
    componentDidMount() {
    establishmentManager.getAll().then(allEstablishments => {
        // console.log(allLocations)
        this.setState({
            establishments: allEstablishments
        })
    })

    MessageManager.getAllAll().then(messages => {
        this.setState({
            messages: messages
        })
    })

    establishmentManager.getAllEstablishmentTypes().then(allEstablishmentsTypes => {
        // console.log(allEstablishmentsTypes)
        this.setState({
            allEstablishmentsTypes: allEstablishmentsTypes
        })
    })
    establishmentManager.getAllPaymentTypes().then(allPaymentTypes => {
        // console.log("word", allPaymentTypes)
        this.setState({
            allPaymentTypes: allPaymentTypes
        })
    })

    establishmentManager.getAllfoodPoints().then(foodPoints => {
        console.log("word", foodPoints)
        this.setState({
            foodPoints: foodPoints
        })
    })

    establishmentManager.getAlltacoPoints().then(tacoPoints => {
        console.log("word", tacoPoints)
        this.setState({
            tacoPoints: tacoPoints
        })
    })

    establishmentManager.getAllmargaritaPoints().then(margaritaPoints => {
        console.log("word", margaritaPoints)
        this.setState({
            margaritaPoints: margaritaPoints
        })
    })

    establishmentManager.getAllquesoPoints().then(quesoPoints => {
        console.log("word", quesoPoints)
        this.setState({
            quesoPoints: quesoPoints
        })
    })

    establishmentManager.getAllburritoPoints().then(burritoPoints => {
        console.log("word", burritoPoints)
        this.setState({
            burritoPoints: burritoPoints
        })
    })

    establishmentManager.getAllsalsaPoints().then(salsaPoints => {
        console.log("word", salsaPoints)
        this.setState({
            salsaPoints: salsaPoints
        })
    })
    }

    allEstablishments = () => establishmentManager.getAll().then(allEstablishments => {
        // console.log(allLocations)
        this.setState({
            establishments: allEstablishments
        })
    })
    // addMessage = message => MessageManager.post(message)
    // .then(() => MessageManager.getAll())
    // .then(messages => this.setState({
    //     messages: messages
    // }))

    // editAnimal = (id, animalObject) => AnimalManager.patch(id, animalObject)
    // .then(() => AnimalManager.getAll())
    // .then(animals => this.setState({
    //     animals: animals
    // }))

    editMessage = (id, messageObject) => MessageManager.patch(id, messageObject)
    .then(() => MessageManager.getAll())
    .then(messages => this.setState({
        messages: messages
    }))

    // deleteMessage = id => {
    //     return fetch(`http://localhost:5002/messages/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(e => e.json())
    //         .then(() => fetch(`http://localhost:5002/messages`))
    //         .then(e => e.json())
    //         .then(messages => this.setState({
    //             messages: messages
    //         }))
    // }


    render() {

        return (

            <React.Fragment>


                <NavBarForm/>


            <Route exact path="/" render={(props) => {
                if (this.isAuthenticated()) {
                    return <MainView {...props}  establishments={this.state.establishments}
                    foodPoints={this.state.foodPoints}
                    tacoPoints={this.state.tacoPoints}
                    margaritaPoints={this.state.margaritaPoints}
                    quesoPoints={this.state.quesoPoints}
                    burritoPoints={this.state.burritoPoints}
                    salsaPoints={this.state.salsaPoints}

                    />
                } else {
                    return <Redirect to="/login" />
                }
            }} />


            {/* <Route exact path="/login" component={Login} /> */}

            {/* <Route exact path="/mainview" render={(props) => {
                if (this.isAuthenticated()) {
                    return <MainView {...props}  establishments={this.state.establishments}/>
                } else {
                    return <Redirect to="/login" />
                }
            }} /> */}
            <Route path="/establishments/:establishmentId(\d+)" render={(props) => {
                if (this.isAuthenticated()) {
                        return <EstablishmentCard {...props}
                        establishments={this.state.establishments}
                        allEstablishmentsTypes={this.state.allEstablishmentsTypes}
                        allPaymentTypes={this.state.allPaymentTypes}
                        allEstablishments={this.allEstablishments}
                        //  messages={this.state.messages}
                        //  addMessage={this.addMessage}
                        //  deleteMessage={this.deleteMessage}
                          />
                    } else {
                        return <Redirect to="/login" />
                    }
                    }} />
            <Route path="/message-edit/:messageId(\d+)" render={(props) => {
                 if (this.isAuthenticated()) {
                        return <MessageEdit {...props}
                        edit={this.editMessage}
                        messages={this.state.messages}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                     }} />


        </React.Fragment>
        )

    }
}

