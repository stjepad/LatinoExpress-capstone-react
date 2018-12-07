import React, { Component } from "react"
import Messages from '../messages/Message'
import MessageManager from '../../modules/uniqueMessage';
import EstablishmentManager from '../../modules/establishmentsManager';
import './establishmentCard.css'
// import VoteForm from "../vote/VoteForm";
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

    // this handleClick is for Best Food Category
    handleClick = (foodPoints, id, argument) => {

        const editedUpSuggestion = {
            foodPoints: parseInt(foodPoints) + 1
        };
        const editedDownSuggestion = {
            foodPoints: parseInt(foodPoints) - 1
        };
        let Id = this.props.match.params.establishmentId;


        if (argument === "up") {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedUpSuggestion)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        } else {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedDownSuggestion)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        }
    }

    // this handleClick1 is for Best taco Category
    handleClick1 = (tacoPoints, id, argument) => {

        const editedUpSuggestion1 = {
            tacoPoints: parseInt(tacoPoints) + 1
        };
        const editedDownSuggestion1 = {
            tacoPoints: parseInt(tacoPoints) - 1
        };
        let Id = this.props.match.params.establishmentId;


        if (argument === "up") {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedUpSuggestion1)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        } else {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedDownSuggestion1)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        }

    }

    // this handleClick2 is for Best margarita Category
    handleClick2 = (margaritaPoints, id, argument) => {

        const editedUpSuggestion2 = {
            margaritaPoints: parseInt(margaritaPoints) + 1
        };
        const editedDownSuggestion2 = {
            margaritaPoints: parseInt(margaritaPoints) - 1
        };
        let Id = this.props.match.params.establishmentId;


        if (argument === "up") {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedUpSuggestion2)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        } else {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedDownSuggestion2)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        }

    }

     // this handleClick3 is for Best queso dipCategory
     handleClick3 = (quesoPoints, id, argument) => {

        const editedUpSuggestion3 = {
            quesoPoints: parseInt(quesoPoints) + 1
        };
        const editedDownSuggestion3 = {
            quesoPoints: parseInt(quesoPoints) - 1
        };
        let Id = this.props.match.params.establishmentId;


        if (argument === "up") {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedUpSuggestion3)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        } else {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedDownSuggestion3)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        }

    }

     // this handleClick4 is for Best queso dipCategory
     handleClick4 = (burritoPoints, id, argument) => {

        const editedUpSuggestion4 = {
            burritoPoints: parseInt(burritoPoints) + 1
        };
        const editedDownSuggestion4 = {
            burritoPoints: parseInt(burritoPoints) - 1
        };
        let Id = this.props.match.params.establishmentId;


        if (argument === "up") {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedUpSuggestion4)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        } else {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedDownSuggestion4)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        }

    }

    // this handleClick5 is for Best queso dipCategory
    handleClick5 = (salsaPoints, id, argument) => {

        const editedUpSuggestion5 = {
            salsaPoints: parseInt(salsaPoints) + 1
        };
        const editedDownSuggestion5 = {
            salsaPoints: parseInt(salsaPoints) - 1
        };
        let Id = this.props.match.params.establishmentId;


        if (argument === "up") {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedUpSuggestion5)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        } else {
            // collectionName, itemId, theObject
            EstablishmentManager.patch(id, editedDownSuggestion5)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    this.props.allEstablishments()
                })
        }

    }

    render() {
        /*
                Using the route parameter, find the animal that the
                user clicked on by looking at the `this.props.animals`
                collection that was passed down from ApplicationViews
            */
        const establishment = this.props.establishments.find(a => a.id === parseInt(this.props.match.params.establishmentId)) || {}
        // console.log("establishment", establishment)
        const establishmentTypes = this.props.allEstablishmentsTypes.find(b => b.id === establishment.establishmentTypeID) || {}
        // console.log(establishmentTypes)
        const paymentTypes = this.props.allPaymentTypes.find(c => c.id === establishment.PaymentTypeID) || {}
        // console.log("meow", paymentTypes)
        return (
            <section className="section">
                <div className="bleep">
                    <div key={establishment.id} className="cards">
                        <h1 className="establishmentCardInfoCSS">  {establishment.name}</h1>
                        <h5 className="establishmentCardInfoCSS">Address: {establishment.address}</h5>
                        {/* <h5 className="establishmentCardInfoCSS">Hours: {establishment.hours}</h5> */}
                        <h5 className="establishmentCardInfoCSS">Phone Number {establishment.phoneNumber}</h5>
                        <h5 className="establishmentCardInfoCSS">Description: {establishment.description}</h5>
                        <h5 className="establishmentCardInfoCSS">Establishment Type: {establishmentTypes.type}</h5>
                        <h5 className="establishmentCardInfoCSS">Beer: {establishment.beer}</h5>
                        <h5 className="establishmentCardInfoCSS">Liquor: {establishment.liquor}</h5>
                        <h5 className="establishmentCardInfoCSS">Mixed Drinks: {establishment.mixDrinks}</h5>
                        <h5 className="establishmentCardInfoCSS">Free Salsa: {establishment.freeSalsa}</h5>
                        <h5 className="establishmentCardInfoCSS">Payment Options: {paymentTypes.type}</h5>


                    </div>
                </div>
                <React.Fragment>
                    <div className="bloop">
                        <Messages  {...this.props}
                            uniqueMessages={this.state.messages}
                            addMessage={this.addMessage}
                            deleteMessage={this.deleteMessage} />
                    </div>

                    {/* <Route path="/establishments/:establishmentId(\d+)/message-edit/:messageId(\d+)" render={(props) => {
                            if (this.isAuthenticated()) {
                                return <MessageEdit {...props}
                                edit={this.editMessage}
                                messages={this.state.messages} />
                            } else {
                                return <Redirect to="/login" />
                            }
                        }} /> */}
                    {/* <VoteForm  {...this.props}
                            // uniqueMessages={this.state.messages}
                            // addMessage={this.addMessage}
                            // deleteMessage={this.deleteMessage}
                            /> */}
                            <div className="bleep">
                            {/* food vote */}
                    <div className="voteFoodForm">
                        <div className="voteForm-group">
                            <label htmlFor="Food"></label>
                            {/* upvote/downvote buttons */}
                            <div className="vote roundrect">
                                <button id="foodPoints" className="increment up" onClick={() => this.handleClick(establishment.foodPoints, establishment.id, "up")}><i className="fas fa-caret-up "></i></button>
                                <h5 className="categoryName">Food</h5>
                                <div className="count">{establishment.foodPoints}</div>

                                <button id="foodPoints" className="increment down" onClick={() => this.handleClick(establishment.foodPoints, establishment.id, "down")}><i className="fas fa-caret-down"></i></button>

                            </div>
                        </div>
                    </div>

                            {/* taco vote */}
                    <div className="voteFoodForm">
                        <div className="voteForm-group">
                            <label htmlFor="Food"></label>
                            {/* upvote/downvote buttons */}
                            <div className="vote roundrect">
                                <button id="tacoPoints" className="increment up" onClick={() => this.handleClick1(establishment.tacoPoints, establishment.id, "up")}><i className="fas fa-caret-up "></i></button>
                                <h5 className="categoryName">Tacos</h5>
                                <div className="count">{establishment.tacoPoints}</div>
                                <button id="tacoPoints" className="increment down" onClick={() => this.handleClick1(establishment.tacoPoints, establishment.id, "down")}><i className="fas fa-caret-down"></i></button>

                            </div>
                        </div>
                    </div>

                    {/* margarita vote */}
                    <div className="voteFoodForm">
                        <div className="voteForm-group">
                            <label htmlFor="Food"></label>
                            {/* upvote/downvote buttons */}
                            <div className="vote roundrect">
                                <button id="margaritaPoints" className="increment up" onClick={() => this.handleClick2(establishment.margaritaPoints, establishment.id, "up")}><i className="fas fa-caret-up "></i></button>
                                <h5 className="categoryName">Margaritas</h5>
                                <div className="count">{establishment.margaritaPoints}</div>
                                <button id="margaritaPoints" className="increment down" onClick={() => this.handleClick2(establishment.margaritaPoints, establishment.id, "down")}><i className="fas fa-caret-down"></i></button>

                            </div>
                        </div>
                    </div>

                     {/* queso vote */}
                     <div className="voteFoodForm">
                        <div className="voteForm-group">
                            <label htmlFor="Food"></label>
                            {/* upvote/downvote buttons */}
                            <div className="vote roundrect">
                                <button id="quesoPoints" className="increment up" onClick={() => this.handleClick3(establishment.quesoPoints, establishment.id, "up")}><i className="fas fa-caret-up "></i></button>
                                <h5 className="categoryName">Queso Dip</h5>
                                <div className="count">{establishment.quesoPoints}</div>
                                <button id="quesoPoints" className="increment down" onClick={() => this.handleClick3(establishment.quesoPoints, establishment.id, "down")}><i className="fas fa-caret-down"></i></button>

                            </div>
                        </div>
                    </div>

                    {/* burrito vote */}
                    <div className="voteFoodForm">
                        <div className="voteForm-group">
                            <label htmlFor="Food"></label>
                            {/* upvote/downvote buttons */}
                            <div className="vote roundrect">
                                <button id="burritoPoints" className="increment up" onClick={() => this.handleClick4(establishment.burritoPoints, establishment.id, "up")}><i className="fas fa-caret-up "></i></button>
                                <h5 className="categoryName">Burritos</h5>
                                <div className="count">{establishment.burritoPoints}</div>
                                <button id="burritoPoints" className="increment down" onClick={() => this.handleClick4(establishment.burritoPoints, establishment.id, "down")}><i className="fas fa-caret-down"></i></button>

                            </div>
                        </div>
                    </div>

                    {/* salsa vote */}
                    <div className="voteFoodForm">
                        <div className="voteForm-group">
                            <label htmlFor="Food"></label>
                            {/* upvote/downvote buttons */}
                            <div className="vote roundrect">
                                <button id="salsaPoints" className="increment up" onClick={() => this.handleClick5(establishment.salsaPoints, establishment.id, "up")}><i className="fas fa-caret-up "></i></button>
                                <h5 className="categoryName">Salsa</h5>
                                <div className="count">{establishment.salsaPoints}</div>
                                <button id="salsaPoints" className="increment down" onClick={() => this.handleClick5(establishment.salsaPoints, establishment.id, "down")}><i className="fas fa-caret-down"></i></button>

                            </div>
                        </div>
                    </div>
                    </div>
                </React.Fragment>
            </section>
        )
    }
}
