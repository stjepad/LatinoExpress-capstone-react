import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div className="EstablismentLists">
                <h3 className="EstablishmentFilter"> Messages </h3>
                {/* <div className="employeesDetails">{
                this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                        {employee.name}
                       <p> <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Fire
                                    </button>
                                    </p>
                    </div>
                )
            }
            </div> */}
            </div>
        );
    }
}