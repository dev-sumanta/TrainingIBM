import React from 'react';

export default class ReturningNull extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Y"
        }
    }

    getTemplate() {
        if(this.state.name == "X") {
            return null;
        }
        
        return <div>Hello</div>;
    }

    render() {
        return (
            <div>
                <b>Hello {this.state.name}</b><hr></hr>
                {this.getTemplate()}
            </div>
        )
    }
}