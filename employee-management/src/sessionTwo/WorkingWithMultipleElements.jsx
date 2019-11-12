import React from 'react';

export default class WorkingWithMultipleElements extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "",
                age: "",
                designation: ""
            }
        }
        this.updateTextbox = this.updateTextbox.bind(this);
    }

    updateTextbox(ev) {

        var inputKey = ev.target.id;
        this.setState({
            user: {
                ...this.state.user,
                [inputKey]: ev.target.value
            }
            
        })
    }

    render() {
        var that = this.state
        return (
            <div>
                First Name:  <input id="name" type="text" onChange={this.updateTextbox} value={ that.user.name} /><br></br><br></br>
                Last Name:   <input id="age" type="text" onChange={this.updateTextbox} value={this.state.user.age} /><br></br><br></br>
                Designation: <input id="designation" type="text" onChange={this.updateTextbox} value={this.state.user.designation} /><br></br><br></br>
                <input type="button" value="Update" />
            </div>
        )
    }
}