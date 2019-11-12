import React from 'react';

export default class LiftingStateUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 30
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState(val) {
        this.setState({
            name: val
        })
    }

    render() {
        return (
            <>
                <h2>Name is Parent: {this.state.name}</h2>
                <ChildComponent update={this.updateState} name={this.state.name}></ChildComponent>
            </>
        )
    }
}

class ChildComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            val: ""
        }
    }

    changeFromChild = (ev) => {
        this.setState({
            val: ev.target.value
        });
    }

    passToParent = () => {
        this.props.update(this.state.val)
    }
    render() {
        return (
            <>
                <h2>User Name in Child: {this.props.name}</h2>
                <input type="text" value={this.state.val} onChange={this.changeFromChild} />
                <input type="button" value="Update" onClick={this.passToParent} />
            </>
        )
    }
}