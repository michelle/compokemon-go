import React, {Component} from 'react';

import './CompokedexEntry.css';

const CompokedexEntry = (Compokemon) => class extends Component {
  render() {
    return (
      <div className="CompokedexEntry">
        <Compokemon {...this.props} />
      </div>
    );
  }
}

export default CompokedexEntry;
