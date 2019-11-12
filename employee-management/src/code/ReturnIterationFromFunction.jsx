import React from 'react';

export default class ReturnIterationFromFunction extends React.Component {
    constructor() {
        super();
        this.state = {
            empDetails: [
                {name: "M", age: 10},
                {name: "A", age: 20},
                {name: "Y", age: 13},
                {name: "U", age: 50},
                {name: "R", age: 10},
                {name: "Y", age: 13},   
            ]
        }
    }

    getEmpList() {
        return this.state.empDetails.filter((emp) => {
            return emp.age >= 13
        }).map((data, index) => {
            return <div class={index + "_" + data.name}>User Name: {data.name}</div>
        })
    }

    render() {
        return (
            <>
                <h2>Employee List:</h2>
                {this.getEmpList()}
            </>
        )
    }
}