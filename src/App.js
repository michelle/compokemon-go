import React, {Component} from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';

/**
 * NB: This is a huge hack to import all Compokemon. Do not actually do this in a production codebase.
 */
function requireAllDefault(requireContext) {
  const keys = requireContext.keys();
  const sanitizedKeys = keys.map((key) => key.split('/').pop().split('.').shift());
  return _.zipObject(sanitizedKeys, keys.map(requireContext).map((item) => item.default));
}
// requires and returns all modules that match

const ALL_COMPOKEMON = requireAllDefault(require.context("./compokemon", true, /^\.\/.*\.js$/));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compokemon: [{
        type: 'Michellareon',
      }],
    };
  }
  createCompokemon(component, props) {
    return React.createElement(component, props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Compokemon GO</h1>
        </div>

        <div className="App-content">
          <h2>Your Compokemon</h2>
          {this.state.compokemon.length ?
            _.map(this.state.compokemon, (cp, i) => this.createCompokemon(ALL_COMPOKEMON[cp.type], {key: i, ...cp}))
          : 'You haven\'t caught anything yet!'}

          <h2>Compokedex</h2>
          <p>Gotta catch 'em all</p>
          {_.map(ALL_COMPOKEMON, (compokemon, key) => this.createCompokemon(compokemon, {key}))}
        </div>
      </div>
    );
  }
}

export default App;
