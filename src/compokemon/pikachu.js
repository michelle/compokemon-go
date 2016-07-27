import React from 'react';
import compokemon from '../Compokemon';
import './Pikachu.css';
import myImage from '../images/michellareon.png';

class Pikachu extends React.Component {
  render() {
    return (
      <div className="Pikachu">
        Pika-chu!
        <img src={myImage} width="130" />
      </div>
    );
  }
}

export default compokemon(Pikachu, {maxHp: 500, element: 'Grass'});
