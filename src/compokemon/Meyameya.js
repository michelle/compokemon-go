import React from 'react';
import compokemon from '../Compokemon';
import './pikachutwo.css';
import myImage from '../images/Meyameya.png';

class Pikachu extends React.Component {
  render() {
    return (
      <div className="Pikachu">
        Meya Meya!
        <img src={myImage} width="130" />
      </div>
    );
  }
}

export default compokemon(Pikachu, {maxHp: 500, element: 'Grass'});
