import React from 'react';

export default class WorkingWithObjectUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "Mayank",
                age: 30,
                designation: "Developer"
            }
        }
    }

    updateData = () => {
        this.setState({
            user: {
                ...this.state.user,
                name: "Anshul"
            }
        })
    }

    render() {
        return (
            <div>
                <h4>User Name: {this.state.user.name}</h4>
                <h4>User Age: {this.state.user.age}</h4>
                <h4>User Designation: {this.state.user.designation}</h4>
                <input type="button" value="Update Data" onClick={this.updateData} />
            </div>
        )
    }
}
