import React from 'react';
import compokemon from '../Compokemon';
import './Xian.css';
import myImage from '../images/michellareon.png';

class Xian extends React.Component {
  render() {
    return (
      <div className="Buloom">
        Hello Xian
        <img src={myImage} width="130" />
      </div>
    );
  }
}

export default compokemon(Xian, {maxHp: 500, element: 'Grass'});
