import React, {Component} from 'react';

import './CompokedexEntry.css';

const CompokedexEntry = (Compokemon) => class extends Component {
  render() {
    const entryClass = `CompokedexEntry ${this.props.obtained ? 'is-obtained' : ''}`;
    return (
      <div className={entryClass}>
        <Compokemon {...this.props} readOnly={true} />
      </div>
    );
  }
}

export default CompokedexEntry;
