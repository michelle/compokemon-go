import React from 'react';
import compokemon from '../Compokemon';
import './Michellareon.css';
import michellareon from '../images/michellareon.png';

class jennaPokemon extends React.Component {
  render() {
    return (
      <div className="Michellareon">
        Hello jenna world
        <img src={michellareon} width="130" />
      </div>
    );
  }
}

export default compokemon(jennaPokemon, {maxHp: 500, type: 'Grass'});
