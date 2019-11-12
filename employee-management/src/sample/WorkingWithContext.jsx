import React from 'react';
var DataContext = React.createContext();
var DataProvider = DataContext.Provider;
var DataConsumer = DataContext.Consumer;

export default class WorkingWithContext extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 20
        }
    }

    render() {
        return (
            <DataProvider value={this.state}>
                <h2>This is Parent...</h2><hr></hr>
                <ChildComponenet></ChildComponenet>
            </DataProvider>
        )
    }
}

class ChildComponenet extends React.Component {
    render() {
        return (
            <DataConsumer>
                {(context) => (
                    <div>
                        The Parent Data is: {context.name}
                    </div>
                )}
            </DataConsumer>
        )
    }
}