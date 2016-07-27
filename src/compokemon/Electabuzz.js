import React from 'react';
import compokemon from '../Compokemon';
import './Electabuzz.css';
import electabuzz from '../images/electabuzz.png';

class Electabuzz extends React.Component {
  render() {
    return (
      <div className="Electabuzz">
        <img src={electabuzz} className="Electabuzz" width="130" />
      </div>
    );
  }
}

export default compokemon(Electabuzz, {maxHp: 9000, element: 'Electric'});