import React from 'react';
import compokemon from '../Compokemon';
import './Pikachu.css';
import pikachu from '../images/pikachu.png';

class Pikachu extends React.Component {
  render() {
    return (
      <div className="Pikachu">
        Pikachu!
        <img src={pikachu} width="130" />
      </div>
    );
  }
}

export default compokemon(Pikachu, {maxHp: 500, element: 'Electric'});
