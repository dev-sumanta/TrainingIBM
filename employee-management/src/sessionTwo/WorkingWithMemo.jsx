import React from 'react';

export default class WorkingWithMemo extends React.Component {
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
                    <MemoFunction name={this.state.name}></MemoFunction>
                </div>
            </>
        )
    }
}

var MemoFunction =  React.memo(function PureComponents(props) {
    console.log("Child Updated...")
    return (
        <h4>The Name in Child is: {props.name}</h4>
   
    )
})

