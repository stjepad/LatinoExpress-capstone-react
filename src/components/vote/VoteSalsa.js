import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./vote.css"

export default class SalsasVote extends Component {
    render() {
        return (
<div className="FoodTop5">
            <h2 className="header">Best Salsa</h2>
                {/* {this.props.foodPoints.map(foodPoint => */}
                <div className="backgroundList">
                    <ol>
                    {this.props.salsaPoints.map(salsaPoint =>
                        <li className="listItem" key={salsaPoint.id}><Link  to={`/establishments/${salsaPoint.id}`}><span className="liPoints">Pts: {salsaPoint.salsaPoints }</span><span className="liName">{salsaPoint.name}</span></Link></li>
                    )}
                    </ol>
                    </div>


            </div>
             );
            }
        }