import React, { Component } from "react"
import Messages from '../messages/Message'
import MessageManager from '../../modules/uniqueMessage';
import './establishmentCard.css'
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
            <section className="section">
                <div className="bleep">
                <div key={establishment.id} className="cards">
                    <h1 className="establishmentCardInfoCSS"> Name: {establishment.name}</h1>
                    <h5 className="establishmentCardInfoCSS">Address: {establishment.address}</h5>
                    <h5 className="establishmentCardInfoCSS">Hours: {establishment.hours}</h5>
                    <h5 className="establishmentCardInfoCSS">Phone Number {establishment.phoneNumber}</h5>
                    <h5 className="establishmentCardInfoCSS">Description: {establishment.description}</h5>
                    <h5 className="establishmentCardInfoCSS">Establishment Type: {establishment.establishmentTypeID}</h5>
                    <h5 className="establishmentCardInfoCSS">Beer: {establishment.beer}</h5>
                    <h5 className="establishmentCardInfoCSS">Liquor: {establishment.liquor}</h5>
                    <h5 className="establishmentCardInfoCSS">Mixed Drinks: {establishment.mixDrinks}</h5>
                    <h5 className="establishmentCardInfoCSS">Free Salsa: {establishment.freeSalsa}</h5>
                    <h5 className="establishmentCardInfoCSS">Payment Options: {establishment.PaymentTypeID}</h5>


                </div>
                </div>
                <div className="bloop">
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
