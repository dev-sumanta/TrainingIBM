import React from "react";

export default class TimeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: new Date().getSeconds(),
            name: "Mayank",
            age: 30,
            counter: 0
        }
    }

    updateData = () => {

        this.setState((state) => {
            return {
                counter: state.counter + 1,
                lastname: "Gupta"
            }
        })
        
    }

    forceDataUpdate = () => {
        this.forceUpdate();
    }

    

    componentWillMount() {
        console.log("Component Will Mount")
    }

    componentDidMount() {
        console.log("Component Did Mount")
    }

    componentWillUpdate() {
        console.log("Component Will Update")
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }

    shouldComponentUpdate(props, state) {
        console.log("Asking for Permission")
        return true;
    }


    render() {
        return (
            <div>
                <b>Counter: {this.state.name}</b><br></br><br></br>
                <h1>Counter: {this.state.lastname} </h1>
                <input type="button" onClick={this.updateData} value="Update Data" />
                <input type="button" onClick={this.forceDataUpdate} value="Force Data" />
                <ChildComponent name={this.state.name} counter={this.state.seconds}></ChildComponent>
            </div>
        )
    }
}


function ChildComponent(props) {
    return <div>Data from Parent: {props.name} Counter: {props.counter}</div>
}