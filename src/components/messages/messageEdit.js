import React, { Component } from "react"
import '../establishment/establishmentCard.css'


export default class MessageEdit extends Component {

    // componentDidMount () {
        //     const message = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messageId, 0))
        //     this.setState(message)

        // }

        // Set initial state
        componentDidMount() {
            const message = this.props.messages.find(m => m.id === parseInt(this.props.match.params.messageId, 0))
            console.log(message)
            this.setState(message)
        }

        state = {
            username: "",
            message: "",
            date: "",
            establishmentID: "",
            id: ""
        }
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    consoleit = () => {
        console.log(this.state)
    }


    user = () => JSON.parse(sessionStorage.getItem("credentials"))

    editTheMessage = evt => {
        evt.preventDefault()

            const Editmessage = {
                // username: this.user().username,
                message: this.state.message,
                // date: this.state.date

            }


            this.props.edit(this.props.match.params.messageId, Editmessage).then(() => this.props.history.goBack())

        }


    render() {
        return (
            <React.Fragment>
                <form className="messageEditForm">
                    <div className="formEdit-group">
                        <label htmlFor="NewMessage"></label>
                        <input
                            type="textarea"
                            className="editInput"
                            onChange={this.handleFieldChange}
                            id="message"
                            //    placeholder={this.state.message}
                            defaultValue={this.state.message} />

                    </div>
                    <button type="submit" onClick={this.editTheMessage} className="saveEdit-button">Save</button>
                </form>
                    </React.Fragment>
        )
    }
}

