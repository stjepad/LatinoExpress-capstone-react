import React, { Component } from 'react'

// import MessageForm from './MessageForm';
import VoteForm from './VoteForm';
import VoteFunctionality from './VoteFunctionality';




class Message extends Component {



    render() {
        return (
            <React.Fragment>

                <VoteForm {...this.props}/>
                <VoteFunctionality {...this.props}/>


            </React.Fragment>
        )
    }
}

export default Message