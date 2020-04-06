import React, { Component } from 'react';

export default class Cell extends Component {
    render() {
        const treeStyle = this.props.type === 'tree' ? style.tree : null;

        return (
            <div className="grid__dirt" style={treeStyle}></div>
        );
    }
}

const style = {
    tree: {
        background: 'green'
    }
};