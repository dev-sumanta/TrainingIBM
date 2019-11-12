import React from 'react';

export default class WorkingWithMaps extends React.Component {
    constructor() {
        super();
        this.state = {
            empDetails: [
                {name: "M", age: 10},
                {name: "A", age: 20},
                {name: "Y", age: 10},
                {name: "U", age: 50},
                {name: "R", age: 10},
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>Employee List:</h2>
                {this.state.empDetails.map((emp) => {
                    return (
                        <div>
                            <b>Employee NAme: {emp.name}</b><br></br>
                            <b>Employee Age: {emp.age}</b>
                            <hr></hr><br></br>
                        </div>
                    )
                })}
            </div>
        )
    }
}