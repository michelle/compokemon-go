import React from 'react';
import compokemon from '../Compokemon';
import './Michellareon.css';
import michellareon from '../images/michellareon.png';

class Michellareon extends React.Component {
  render() {
    return (
      <div className="Michellareon">
        Hello world
        <img src={michellareon} width="130" />
      </div>
    );
  }
}

export default compokemon(Michellareon, {maxHp: 500, type: 'Grass'});
