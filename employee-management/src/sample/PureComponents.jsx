import React from 'react';

export default class PureComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "MAyank",
            age: 30,
            designation: "Developer"
        }

        setInterval(() => {
            this.setState({
                age: this.state.age + 1
            })
        }, 1000);
    }

    

    render() {
        console.log("Parent Rerendered...")
        return (
            <div>
                <div>Parent Data: {this.state.name}</div><hr></hr>
                <ChildComponent name={this.state.name}></ChildComponent><hr></hr>
                <MemoFunction name={this.state.name}></MemoFunction>
            </div>
        )
    }
}

class ChildComponent extends React.PureComponent {
    render() {
        console.log("Child Rerendered....")
        return (
            <div>{this.props.name}</div>
        )
    }
}

function SimpleFunction(props) {
    console.log("Memo Rerendered...")
    return (
        <div>{props.name}</div>
    )
}

var MemoFunction = React.memo(SimpleFunction)