// import React, { Component } from 'react'

// // import MessageForm from './MessageForm';
// import VoteForm from './VoteForm';
// import VoteFunctionality from './VoteFunctionality';




// class Message extends Component {



//     render() {
//         return (
//             <React.Fragment>

//                 <VoteForm {...this.props}/>
//                 <VoteFunctionality {...this.props}/>


//             </React.Fragment>
//         )
//     }
// }

// export default Message

import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./vote.css"

export default class Vote extends Component {
    render() {
        return (
            <div className="FoodTop5">
            <h2 className="header">Best Food</h2>
                {/* {this.props.foodPoints.map(foodPoint => */}
                <div className="backgroundList">
                    <ol>
                    {this.props.foodPoints.map(foodPoint =>
                        <li className="listItem" key={foodPoint.id}><Link  to={`/establishments/${foodPoint.id}`}><span className="liPoints">Pts: {foodPoint.foodPoints }</span><span className="liName">{foodPoint.name}</span></Link></li>
                    )}
                    </ol>
                    </div>


            </div>


        );
    }
}