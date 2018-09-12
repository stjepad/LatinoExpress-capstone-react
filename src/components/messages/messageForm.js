import React, { Component } from "react"
// import "./Message.css"
import MessageManager from '../../modules/uniqueMessage';

export default class MessageForm extends Component {

    state = {
        // messages: [],
        username: "",
        message: "",
        date: ""
    }
//will need to pull userid from session storage.

    handleFieldChange = evt => {
        // const stateToChange = {}
        // stateToChange[evt.target.id] = evt.target.value

        this.setState({message: evt.target.value, date: Date.now()})
    }

    user = () => JSON.parse(sessionStorage.getItem("credentials"))


    constructNewMessage = evt => {

        const newMessage = {
            username: this.user().username,
            message: this.state.message,
            date: this.state.date
        }
            this.setState({
                username: "",
                message: "",
                date: ""})

        this.props.addMessage(newMessage).then(()=> this.props.history.push("/mainview"))

    }

    render() {
        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="NewMessage"></label>
                        <textarea rows="10" cols="10"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="addMessage"
                               placeholder="New Message"></textarea>
                    </div>
                    <button type="submit" onClick={this.constructNewMessage} className="btn btn-primary save-button">Save</button>
                </form>
            </React.Fragment>
        )
    }
}


