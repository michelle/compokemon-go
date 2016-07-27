import React, {Component} from 'react';
import logo from './images/logo.svg';
import _ from 'lodash';

import compokedexEntry from './CompokedexEntry';
import CatchCompokemon from './components/CatchCompokemon';

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
      compokemon: [
        {
          type: 'Buloom',
          currentHp: 200,
        },
        {
          name: 'CSS iz cool',
          type: 'Buloom',
          currentHp: 9000,
        },
      ],
      potions: 1000,
    };
  }
  createCompokemon(component, props) {
    return React.createElement(component, props);
  }
  hasCompokemon(name) {
    return _.some(this.state.compokemon, (c) => c.type === name);
  }

  handleCaught = (type) => {
    // Add our new compokemon to our list!
    this.setState({
      compokemon: [
        ...this.state.compokemon,
        {
          type: type,
          currentHp: 0,
        },
      ],
    });
  }

  handleHeal = (index) => () => {
    // Heal 50 HP, and remove a potion from our state.
    const {compokemon, potions} = this.state;
    const currentCompokemon = compokemon[index];
    // Note: It's bad to mutate state; in a real production app you'd use a "state store" like
    // Redux for something like this.
    currentCompokemon.currentHp += 50;
    this.setState({
      potions: potions - 1,
    });
  }

  handleNameChange = (index) => (newName) => {
    // Change the name of a compokemon.
    const {compokemon} = this.state;
    // Note: It's bad to mutate state; in a real production app you'd use a "state store" like
    // Redux for something like this.
    const currentCompokemon = compokemon[index];
    currentCompokemon.name = newName;
    // Because we're mutating state, we have to call this hacky function to force a re-render. DO NOT DO THIS AT HOME.
    this.forceUpdate();
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
            _.map(this.state.compokemon, (cp, i) => {
              return this.createCompokemon(ALL_COMPOKEMON[cp.type], {
                key: i,
                ...cp,
                onNameChange: this.handleNameChange(i),
                onHeal: this.handleHeal(i),
              });
            })
          : 'You haven\'t caught anything yet!'}

          <CatchCompokemon onCaught={this.handleCaught} />

          <h2>Compokedex</h2>
          <p>Gotta catch 'em all</p>
          {_.map(ALL_COMPOKEMON, (compokemon, key) => this.createCompokemon(compokedexEntry(compokemon), {key, obtained: this.hasCompokemon(key), type: key}))}
        </div>
      </div>
    );
  }
}

export default App;
