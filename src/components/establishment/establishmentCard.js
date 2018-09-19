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
                    <h2 className="establishmentCardInfoCSS"> Name: {establishment.name}</h2>
                    <p className="establishmentCardInfoCSS">Address: {establishment.address}</p>
                    <p className="establishmentCardInfoCSS">Hours: {establishment.hours}</p>
                    <p className="establishmentCardInfoCSS">Phone Number {establishment.phoneNumber}</p>
                    <p className="establishmentCardInfoCSS">Description: {establishment.description}</p>
                    <p className="establishmentCardInfoCSS">Establishment Type: {establishment.establishmentTypeID}</p>
                    <p className="establishmentCardInfoCSS">Beer: {establishment.beer}</p>
                    <p className="establishmentCardInfoCSS">Liquor: {establishment.liquor}</p>
                    <p className="establishmentCardInfoCSS">Mixed Drinks: {establishment.mixDrinks}</p>
                    <p className="establishmentCardInfoCSS">Free Salsa: {establishment.freeSalsa}</p>
                    <p className="establishmentCardInfoCSS">Payment Options: {establishment.PaymentTypeID}</p>


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
