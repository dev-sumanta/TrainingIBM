import React from "react"

export default class WorkingWithEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 30
        }

        this.getUserData = this.getUserData.bind(this)
    }

    getUserData(event) {
        console.log(event)
    }

    render() {
        return (
            <div>
                <b>User Name: {this.state.name}</b><br></br><br></br>
                <input type="button" onClick={this.getUserData} value="Get Data" />
            </div>
        )
    }
}