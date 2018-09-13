import React, { Component } from "react"
import Messages from '../messages/Message'
import MessageManager from '../../modules/uniqueMessage';


export default class EstablishmentCard extends Component {

    state = {
        establishmentMessages: []
    }

    componentDidMount() {


        MessageManager.getAll(this.props.match.params.establishmentId).then(messages => {
            this.setState({
                establishmentMessages: messages
            })
        })

    }
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
                        uniqueMessages={this.state.establishmentMessages}/>
                    </React.Fragment>
                </div>
            </section>
        )
    }
}
