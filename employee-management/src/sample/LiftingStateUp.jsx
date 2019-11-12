import React from 'react';

export default class LiftingStateUp extends React.Component {
    constructor() { 
        super();
        this.state = {
            name: "Mayank",
            age: 30
        }
    }

    updateParentData(name, age) {
        this.setState({
            name: name,
            age: age
        })
    }

    render() {
        return (
            <div>
                <p>Data in Parent: {this.state.name}</p>
                <p>Data in Parent Age: {this.state.age}</p>
                <ChildComponent updateParentData={this.updateParentData.bind(this)} />
            </div>
        )
    }
}

class ChildComponent extends React.Component {
    render() {
        return <input type="button" value="Update Parent" onClick={() => this.props.updateParentData("Anshul", 40)} />
    }
}