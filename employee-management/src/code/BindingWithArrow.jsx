import React from 'react';

export default class WorkingWithEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    getName = () => {
        alert(this.state.name)
    }

    render() {
        return (
            <div>
            <h1>The Name is {this.state.name}</h1>
            <input type="button" onClick={this.getName} value="Click" />
            </div>
        )
    }
}