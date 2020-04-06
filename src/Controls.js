import React, { Component } from 'react';

export default class Controls extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gridSize: 30,
            minXSpacing: 3,
            minYSpacing: 4,
            maxTries: 1000
        };
    }

    generate() {
        if (this.props.onGenerate) {
            this.props.onGenerate({
                ...this.state
            });
        }
    }

    render() {
        return (
            <div className="controls">
                <h1 className="controls__title">Animal Crossing <br /> Natural Forest Generator</h1>
                <h2 className="controls__subtitle">Controls</h2>

                <div className="controls__group">
                    <label className="controls__label">
                        Grid Size
                        <input value={this.state.gridSize} onChange={e => this.setState({ gridSize: Number(e.target.value) })}
                            type="number" min="1" max="30" step="1" className="controls__input" />
                    </label>
                </div>

                <div className="controls__group">
                    <label className="controls__label">
                        Minimum X Spacing
                        <input value={this.state.minXSpacing} onChange={e => this.setState({ minXSpacing: Number(e.target.value) })}
                            type="number" min="2" max="10" step="1" className="controls__input" />
                    </label>
                </div>

                <div className="controls__group">
                    <label className="controls__label">
                        Minimum Y Spacing
                        <input value={this.state.minYSpacing} onChange={e => this.setState({ minYSpacing: Number(e.target.value) })}
                            type="number" min="2" max="10" step="1" className="controls__input" />
                    </label>
                </div>

                <div className="controls__group">
                    <label className="controls__label">
                        Algorithm Attempts
                        <input value={this.state.maxTries} onChange={e => this.setState({ maxTries: Number(e.target.value) })}
                            type="number" min="1" max="10000" step="1" className="controls__input" />
                    </label>
                </div>

                <div className="controls__group">
                    <button className="controls__btn" onClick={() => this.generate()}>Generate</button>
                </div>
            </div>
        );
    }
}