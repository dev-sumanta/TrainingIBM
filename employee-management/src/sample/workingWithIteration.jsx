import React from 'react';

export default class WorkingWithIteration extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {name: "Mayank", age: 30},
                {name: "Ankit", age: 30},
                {name: "Anshul", age: 30},
                {name: "Aditya", age: 30},
                {name: "Meha", age: 30},
                {name: "Bunty", age: 30}
            ]
        }
    }

    addData() {

        var list = this.state.users.concat({name: "Random", age: 40})
        this.setState({
            users: list
        })
    }

    render() {
        return (
            <div>
                <input type="button" value="Add Data" onClick={this.addData.bind(this)} />
                {this.state.users.map(user => {
                    return (
                        <div>
                            <h3>User Name: {user.name}</h3>
                            <h3>User Age: {user.age}</h3>
                            <input type="text" />
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}
