import React, { Component } from "react"
import Messages from '../messages/Message'
import MessageManager from '../../modules/uniqueMessage';
// import MessageEdit from '../messages/MessageEdit';
// import { Route, Redirect } from 'react-router-dom'


export default class EstablishmentCard extends Component {
    // isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null
    state = {
        messages: []
    }

    componentDidMount() {

        console.log("componentdidmount")
        MessageManager.getAll(this.props.match.params.establishmentId).then(messages => {
            this.setState({
                messages: messages
            })
        })

    }

    addMessage = message => MessageManager.post(message)
        .then(() => MessageManager.getAll(this.props.match.params.establishmentId).then(messages => {
            this.setState({
                messages: messages
            })
        }))

    deleteMessage = id => {
        return fetch(`http://localhost:5002/messages/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => MessageManager.getAll(this.props.match.params.establishmentId).then(messages => {
                this.setState({
                    messages: messages
                })
            }))

    }

    // editMessage = (id, messageObject) => MessageManager.patch(id, messageObject)
    // .then(() => MessageManager.getAll())
    // .then(messages => this.setState({
    //     messages: messages
    // }))

    // editMessage = (id, messageObject) => MessageManager.patch(id, messageObject)
    //     .then(() => MessageManager.getAll())
    //     .then(messages => this.setState({
    //         messages: messages
    //     }))

    render() {
        /*
                Using the route parameter, find the animal that the
                user clicked on by looking at the `this.props.animals`
                collection that was passed down from ApplicationViews
            */
        const establishment = this.props.establishments.find(a => a.id === parseInt(this.props.match.params.establishmentId)) || {}

        return (
            <section>
                <div key={establishment.id} className="card">
                    <h2>Name: {establishment.name}</h2>
                    <p>Address: {establishment.address}</p>
                    <p>Hours: {establishment.hours}</p>
                    <p>Phone Number {establishment.phoneNumber}</p>
                    <p>Description: {establishment.description}</p>
                    <p>Establishment Type: {establishment.establishmentTypeID}</p>
                    <p>Beer: {establishment.beer}</p>
                    <p>Liquor: {establishment.liquor}</p>
                    <p>Mixed Drinks: {establishment.mixDrinks}</p>
                    <p>Free Salsa: {establishment.freeSalsa}</p>
                    <p>Payment Options: {establishment.PaymentTypeID}</p>


                </div>
                <div>
                    <React.Fragment>
                        <Messages  {...this.props}
                            uniqueMessages={this.state.messages}
                            addMessage={this.addMessage}
                            deleteMessage={this.deleteMessage} />

                        {/* <Route path="/establishments/:establishmentId(\d+)/message-edit/:messageId(\d+)" render={(props) => {
                            if (this.isAuthenticated()) {
                                return <MessageEdit {...props}
                                edit={this.editMessage}
                                messages={this.state.messages} />
                            } else {
                                return <Redirect to="/login" />
                            }
                        }} /> */}
                    </React.Fragment>
                </div>
            </section>
        )
    }
}
