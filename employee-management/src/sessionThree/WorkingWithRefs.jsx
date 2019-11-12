import React from 'react';

export default class WorkingWithRefs extends React.Component {

    updateUncontrolled() {
        debugger;
        this.refs.uncontrolled.value = "Mayank"
    }

    render() {
        return (
            <>
                <input type="text" ref="uncontrolled" />
                <input type="button" onClick={this.updateUncontrolled.bind(this)} value="Update" />
            </>
        )
    }
}