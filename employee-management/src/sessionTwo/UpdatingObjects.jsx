import React from 'react';

export default class UpdateObject extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "X",
                age: 20
            }
        }
    }

    updateData() {
        this.setState({
            user: {
                ...this.state.user,
                designation: "ABC"
            }
        })
    }

    render() {
        return (
            <div>
                <h2>User Name: {this.state.user.name}</h2>
                <h2>User Designation: {this.state.user.designation}</h2>
                <input type="button" value="Update" onClick={this.updateData.bind(this)}/>
            </div>
        )
    }
}