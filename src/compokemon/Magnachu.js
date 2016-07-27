import React from 'react';
import compokemon from '../Compokemon';
import magnachu from '../images/Magnachu.jpg'
import './Magnachu.css';

class Magnachu extends React.Component {
  render() {
    return (
      <div className="Magnachu">
        <img src={magnachu} className="Magnachu" width="150" />
      </div>
    );
  }
}

export default compokemon(Magnachu, {maxHp: 9000, element: 'Normal'});
