// import React, { Component } from 'react'

// export default class Messages extends Component {
//     render() {
//         return (
//             <div className="EstablismentLists">
//                 <h3 className="EstablishmentFilter"> Messages </h3>

//             </div>
//         );
//     }
// }

import React, { Component } from 'react'
// import './Message.css'
// import {Link} from "react-router-dom"
// import MessageManager from '../../modules/MessageManager';
import MessageForm from './MessageForm';
import MessageList from './MessageList';



class Message extends Component {



    render() {
        return (
            <React.Fragment>

                <MessageList {...this.props}/>
                <MessageForm {...this.props}/>

            </React.Fragment>
        )
    }
}

export default Message