import React from 'react';

export default class WorkinfWithForms extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: 0
        }
    }

    updateData(event) {
        debugger;
        if(event.target.id == "userName") {
            this.setState({
                name: event.target.value
            })
        } else {
            this.setState({
                age: event.target.value
            })
        }
        
    }

    getNameData() {
        alert(this.state.name)
    }

    getAgeData() {
        alert(this.state.age)
    }

    render() {
        return (
            <div>
                User Name: <input type="text" id="userName" value={this.state.name} onChange={this.updateData.bind(this)}/><br></br>
                User Age: <input type="text" id="userAge" value={this.state.age} onChange={this.updateData.bind(this)}/><br></br>
                <input type="button" onClick={this.getNameData.bind(this)} value="Get Name Data" /><br></br>
                <input type="button" onClick={this.getAgeData.bind(this)} value="Get Age Data" />
            </div>
        )
    }
}