import React from 'react';

var DataContext = React.createContext();
var DataProvider =  DataContext.Provider;
var DataConsumer = DataContext.Consumer;

var OtherDataProvider =  DataContext.Provider;
var OtherDataConsumer = DataContext.Consumer;

export default class WorkingWithContext extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 30
        }

        setTimeout(() =>{
            this.setState({
                name: "Anshul"
            })
        }, 4000)
    }

    render() {
        return (
            <>
                <DataProvider value={this.state}>
                    <ChildComponent></ChildComponent>
                </DataProvider>

                <OtherDataProvider value={this.state}>
                    <ChildComponent></ChildComponent>
                </OtherDataProvider>
            </>
        )
    }
}

class ChildComponent extends React.Component {
    render() {
        console.log("Updated....")
        return (<>
            <h3>This is the Child Component</h3>
            <ChildChildComponent></ChildChildComponent></>
        )
    }
}

class ChildChildComponent extends React.Component {
    render() {
        return (
            <>
            <DataConsumer>
                {(context) => (
                    <div>Hello Alll {context.name}</div>
                )}
            </DataConsumer>

            <OtherDataConsumer>
                {(context) => (
                    <div>Hello Alll {context.name}</div>
                )}
            </OtherDataConsumer>
            </>
        )
    }
}