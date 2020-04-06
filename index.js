import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './src/Grid';
import Controls from './src/Controls';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gridSize: 30,
            minXSpacing: 3,
            minYSpacing: 4,
            maxTries: 1000
        };
    }

    render() {
        return (
            <div className="container">
                <Controls onGenerate={options => this.onGenerate(options)} />
                <div className="container__grid">
                    <Grid size={this.state.gridSize} minXSpacing={this.state.minXSpacing} minYSpacing={this.state.minYSpacing} />
                </div>
            </div>
        );
    }

    onGenerate(options) {
        this.setState({
            ...options
        });
    }
}

ReactDOM.render(<App />, document.getElementById('app'));