import React from 'react';

export default class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 0
        }

        setInterval(() => {
            this.setState({
                age: this.state.age + 1
            })
        }, 1000) 
    }

    render() {
        console.log("Parent Updated...")
        return (
            <>
                <div>
                    <h2>User Name: {this.state.name}</h2>
                    <h2>User Age: {this.state.age}</h2><hr></hr>
                    <PureComponents name={this.state.name}></PureComponents>
                </div>
            </>
        )
    }
}

class PureComponents extends React.PureComponent {
    render() {
        console.log("Child Updated...")
        return (
            <h4>The Name in Child is: {this.props.name}</h4>
        )
    }
}