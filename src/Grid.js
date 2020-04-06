import React, { Component } from 'react';
import Cell from './Cell';
import createForest from './forest';

export default class Grid extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.grid = [];
        for (let y = 0; y < this.props.size; ++y) {
            this.grid.push([]);
            for (let x = 0; x < this.props.size; ++x) {
                this.grid[y].push('dirt');
            }
        }

        const forest = createForest(this.props.size, { minXSpacing: this.props.minXSpacing, minYSpacing: this.props.minYSpacing });
        forest.forEach(({ x, y }) => {
            this.grid[y][x] = 'tree';
        });

        return (
            <div className="grid" style={{ gridTemplateColumns: `repeat(${this.props.size}, min-content)` }}>
                {
                    this.grid.map(row => {
                        return row.map((cellType, j) => <Cell type={cellType} key={`cell-${j}`} />)
                    })
                }
            </div>
        );
    }
}