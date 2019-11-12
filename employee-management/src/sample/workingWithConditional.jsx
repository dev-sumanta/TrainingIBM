import React from "react";

export default class WorkingWithConditional extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Anshul",
            age: 30
        }
    }

    updateName() {
        this.setState({
            age: 20
        })
    }

    getTemplate() {
        if(this.state.name == "Mayank") {
            return <h1>Hi.. I am Mayank</h1>
        } else {
            return <h1>Hi This is Anshul...</h1>
        }
    }

    render() {
        return (
            <div>
                {this.getTemplate()}
                {this.state.age == 30 && <h4>This is Mayank</h4>}
                {this.state.age == 20 && <h4>This is Anshul</h4>}
                <input type="button" value="Update Age" onClick={this.updateName.bind(this)} />
            </div>
        )
    }
}