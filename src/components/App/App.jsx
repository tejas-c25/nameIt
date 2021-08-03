import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headertext: 'Name It!',
        headerexpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerexpanded: !inputText,
            suggestedNames: inputText.length > 0 ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerexpanded={this.state.headerexpanded}
                    headTitle={this.state.headertext}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
