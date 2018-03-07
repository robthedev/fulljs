import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

class App extends React.Component {
        state = { 
            pageHeader: "First header",
            contests: []
        };
        componentDidMount() {
            axios.get('/api/contests')
                .then(resp => {
                    this.setState({
                        contests: resp.data.contests
                    });
                })
                .catch(console.error)
        }

    render() {
        return (
            <div>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(
                        //contest => <ContestPreview contest={contest} />
                        contest => <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
};

export default App;