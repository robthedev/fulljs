import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            pageHeader: "First header"
        };
    }

    render() {
        return (
            <div>
                <Header message={this.state.pageHeader} />
                <div>
                    ---
                </div>
            </div>
        );
    }
};

export default App;