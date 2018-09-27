import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./vote.css"

export default class Vote extends Component {
    render() {
        return (
            <div className="FoodTop5">
            <h2 className="header">Best Burritos</h2>
                {/* {this.props.foodPoints.map(foodPoint => */}
                <div className="backgroundList">
                    <ol>
                    {this.props.burritoPoints.map(burritoPoint =>
                        <li className="listItem" key={burritoPoint.id}><Link  to={`/establishments/${burritoPoint.id}`}><span className="liPoints">Pts: {burritoPoint.burritoPoints }</span><span className="liName">{burritoPoint.name}</span></Link></li>
                    )}
                    </ol>
                    </div>


            </div>


        );
    }
}