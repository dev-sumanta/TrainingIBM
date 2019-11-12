import React from 'react';

export default class ConditionalRendering extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Y1"
        }
    }

    render() {
        return (
            <div>
                {this.state.name == "Y" && <h2>Hello Y</h2>}
                {this.state.name != "Y" && <h2>Hello World</h2>}
            </div>
        )
    }
}