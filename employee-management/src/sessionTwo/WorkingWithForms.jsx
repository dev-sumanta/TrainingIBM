import React from 'react';

export default class WorkingWithForms extends React.Component {
    constructor() {
        super();
        this.updateTextbox = this.updateTextbox.bind(this)
        this.state = {
            name: "Mayank"
        }
    }

    callUpperCase=(ev) => {
        return ev.target.value.toUpperCase();
    }

    updateTextbox(ev) {
        this.setState({
            name: this.callUpperCase(ev)
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateTextbox} value={this.state.name} /><br></br><br></br>
                <input type="button" value="Update" />
            </div>
        )
    }
}