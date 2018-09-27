import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./vote.css"

export default class QuesoVote extends Component {
    render() {
        return (
<div className="FoodTop5">
            <h2 className="header">Best Queso</h2>
                {/* {this.props.foodPoints.map(foodPoint => */}
                <div className="backgroundList">
                    <ol>
                    {this.props.quesoPoints.map(quesoPoint =>
                        <li className="listItem" key={quesoPoint.id}><Link  to={`/establishments/${quesoPoint.id}`}><span className="liPoints">Pts: {quesoPoint.quesoPoints }</span><span className="liName">{quesoPoint.name}</span></Link></li>
                    )}
                    </ol>
                    </div>


            </div>
             );
            }
        }