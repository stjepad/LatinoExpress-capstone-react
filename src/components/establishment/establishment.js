import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './establishment.css'

export default class Establishment extends Component {
    render() {
        return (
            <div className="EstablismentLists">
                {this.props.establishments.map(establishment =>
                    <div className="background-div"
                        key={establishment.id}>
                        <Link className="nav-link-establishment" to={`/establishments/${establishment.id}`}>{establishment.name}</Link>
                    </div>
                    )

                }
            </div>
        );
    }
}
