import React from 'react';
import compokemon from '../Compokemon';
import './Buloom.css';
import myImage from '../images/michellareon.png';

class Buloom extends React.Component {
  render() {
    return (
      <div className="Buloom">
        Hello world
        <img src={myImage} width="130" />
      </div>
    );
  }
}

export default compokemon(Buloom, {maxHp: 500, element: 'Grass'});
