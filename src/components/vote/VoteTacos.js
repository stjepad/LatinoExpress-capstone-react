import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./vote.css"

export default class TacosVote extends Component {
    render() {
        return (
<div className="FoodTop5">
            <h2 className="header">Best Tacos</h2>
                {/* {this.props.foodPoints.map(foodPoint => */}
                <div className="backgroundList">
                    <ol>
                    {this.props.tacoPoints.map(tacoPoint =>
                        <li className="listItem" key={tacoPoint.id}><Link  to={`/establishments/${tacoPoint.id}`}><span className="liPoints">Pts: {tacoPoint.tacoPoints }</span><span className="liName">{tacoPoint.name}</span></Link></li>
                    )}
                    </ol>
                    </div>


            </div>
             );
            }
        }