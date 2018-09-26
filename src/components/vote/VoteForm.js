import React, { Component } from "react"

// import ApiManager from "../../modules/voteManager";
import "./vote.css"
export default class VoteForm extends Component {

state = {
    foodPoints: ""
}

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}



    render() {
        return (
            <React.Fragment>
                <form className="voteForm">
                    <div className="voteForm-group">
                        <label htmlFor="Food"></label>
                        {/* upvote/downvote buttons */}
                        <div className="vote roundrect">
  <button  id="foodPoints" className="increment up" onClick={() => this.props.handleClick(this.props.establishment.foodPoints, this.props.establishment.id, "up")}>up</button>
  <h4>Food</h4>
  <div className="count">0</div>
  <button id="foodPoints" className="increment down" onClick={() => this.props.handleClick(this.props.establishment.foodPoints, this.props.establishment.id, "down")}>down</button>

</div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

