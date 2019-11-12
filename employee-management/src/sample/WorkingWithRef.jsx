import React from 'react';

export default class WorkingWithRef extends React.Component {
    constructor() {
        super();
        
    }

    updateRefs = () => {
        debugger;
        this.refs.sampleText.value += "Data";
    }

    render() {
        return (
            <div>
                <input type="text" ref="sampleText" /><br></br><br></br>
                <input type="button" value="Update Data" onClick={this.updateRefs} />
            </div>
        )
    }
}