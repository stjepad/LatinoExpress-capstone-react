import React, { Component } from "react";

import VoteForm from "./VoteForm";
import ApiManager from "../../modules/voteManager";
// import "./Itinerary.css"

export default class VoteFunctionality extends Component {
    constructor() {
        super();
        this.state = {
            // groups: [],
            establishments: []
        };
    }

    componentDidMount() {
        // //the group id...
        // let Id = this.props.location.state.id;

        // //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
        // ApiManager.getSuggestionsForTrip("establishments", Id)
        //     .then(establishments => {
        //         this.setState({ establishments: establishments })
        //     })
    }


    handleClick = (foodPoints, id, argument) => {
        const editedUpSuggestion = {
            foodPoints: parseInt(foodPoints) + 1
        };
        const editedDownSuggestion = {
            foodPoints: parseInt(foodPoints) - 1
        };
        let Id = this.props.location.state.id;


        if (argument === "up") {
            // collectionName, itemId, theObject
            ApiManager.patchItem("establishments", id, editedUpSuggestion)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    ApiManager.getSuggestionsForTrip("establishments", Id)
                        .then(establishments => {
                            // console.log("establishments", establishments);
                            this.setState({ establishments: establishments })
                        })
                })
        } else {
            // collectionName, itemId, theObject
            ApiManager.patchItem("establishments", id, editedDownSuggestion)
                .then(() => {
                    //this one takes the establishments and grabs the group id attached to them and then sorts in order of ranks
                    ApiManager.getSuggestionsForTrip("establishments", Id)
                        .then(establishments => {
                            this.setState({ establishments: establishments })
                        })
                })
        }

    }

    render() {
        return (
            <React.Fragment>
                {/* <div><h2 id="itineraryTitle">{this.props.location.state.name} Itinerary</h2> </div> */}
                {
                    this.state.establishments.map(establishment =>
                        <VoteForm key={establishment.id} establishment={establishment} handleClick={this.handleClick} />
                    )
                }
            </React.Fragment>
        )
    }
}

