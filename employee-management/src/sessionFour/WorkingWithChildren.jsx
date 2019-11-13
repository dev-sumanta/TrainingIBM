import React from 'react';

export default class WorkingWithChildren extends React.Component {
    
    
    render() {
        return (
            <>
                <ChildComponent>
                    <div>
                        <h4>This is the first Child....</h4>
                        <b>Hello All</b>
                        <p>This is Inner HTML...</p>
                    </div>

                    <div>
                        <h4>This is the Second Child....</h4>
                        <b>Hello All</b>
                        <p>This is Inner HTML...</p>
                    </div>

                    <ReactComp/>
                </ChildComponent>
            </>
        )
    }
}

function ReactComp() {
    return <h1>Hellp.....</h1>
}

class ChildComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    render() {
        return (
            <>
                <h2>Data from Child....</h2>
                {this.props.children[this.state.index]}
            </>
        )
    }
}