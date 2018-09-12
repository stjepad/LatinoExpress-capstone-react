import React, { Component } from "react"



export default class MessageEdit extends Component {

    // componentDidMount () {
    //     const message = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messageId, 0))
    //     this.setState(message)

    // }

    // Set initial state
    state = {
            username:"",
            message:"",
            date: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }



    user = () => JSON.parse(sessionStorage.getItem("credentials"))

    editTheMessage = evt => {
        evt.preventDefault()

            const Editmessage = {
                // username: this.user().username,
                message: this.state.message,
                date: this.state.date

            }


            this.props.edit(this.props.match.params.messageId, Editmessage).then(() => this.props.history.push("/mainview"))

        }
    componentDidMount() {
        const message = this.props.messages.find(m => m.id === parseInt(this.props.match.params.messageId, 0)) || {}
        this.setState(message)
    }


    render() {

        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="NewMessage"></label>
                        <input type="text" rows="20" cols="50"
                               className="edit-form"
                               onChange={this.handleFieldChange}
                               id="message"
                               placeholder="Edited Message" defaultValue={this.state.message} />

                    </div>
                    <button type="submit" onClick={this.editTheMessage} className="btn btn-primary save-button">Save</button>
                </form>
                    </React.Fragment>
        )
    }
}

