import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Establishment extends Component {
    render() {
        return (
            <div className="EstablismentLists">
                {this.props.establishments.map(establishment =>
                <div id={`establishment--${establishment.id}`} key={establishment.id}>
                    <Link className="nav-link" to={`/establishments/${establishment.id}`}>{establishment.name}</Link>
                    </div>)

    }
            </div>
        );
    }
}
{/* <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link> */}








// import React, { Component } from 'react'

// export default class LocationList extends Component {
//     render() {
//         return (
//             <div className="locations">
//                 <h2>Our Locations </h2>
//                     {
//                 this.props.locations.map(location =>
//                     <div id={`location--${location.id}`} key={location.id}>
//                         <h4>{location.name}</h4>
//                         <p>{location.address}</p>

//                     </div>
//                 )
//             }
//             </div>
//         );
//     }
// }