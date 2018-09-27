import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./vote.css"

export default class MargaritaVote extends Component {
    render() {
        return (
<div className="FoodTop5">
            <h2 className="header">Best Margarita</h2>
                {/* {this.props.foodPoints.map(foodPoint => */}
                <div className="backgroundList">
                    <ol>
                    {this.props.margaritaPoints.map(margaritaaPoint =>
                        <li className="listItem" key={margaritaaPoint.id}><Link  to={`/establishments/${margaritaaPoint.id}`}><span className="liPoints">Pts: {margaritaaPoint.margaritaPoints }</span><span className="liName">{margaritaaPoint.name}</span></Link></li>
                    )}
                    </ol>
                    </div>


            </div>
             );
            }
        }