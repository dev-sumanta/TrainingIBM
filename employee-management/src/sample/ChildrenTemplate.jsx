import React from 'react';

export default class ChildrenTemplate extends React.Component {

    render() {
        return (
            <div>{this.props.children[1]}</div>
        )
    }
}