import React from 'react';

export default class UpdateingArray extends React.Component {
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
        return this.state.empDetails.map((data) => {
            return (
                <div key={data.name}>
                    <div>User Name: {data.name}</div>
                    <div>User Age: {data.age}</div>
                    <input type="text"/><hr></hr>
                </div>
            )
        })
    }

    addNewEmployee() {
        this.setState({
            empDetails: [{ name:"Random", age: 100}].concat(this.state.empDetails)
            
        })
    }

    render() {
        return (
            <div>
                <input type="button" value="Add" onClick={this.addNewEmployee.bind(this)} /><br></br>
                <h2>Employee List:</h2>
                {this.getEmpList()}
            </div>
        )
    }
}