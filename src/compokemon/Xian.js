import React from 'react';
import compokemon from '../Compokemon';
import './Xian.css';
<<<<<<< HEAD
import myImage from '../images/michellareon.png';
=======
import myImage from '../images/pikachu.png';
>>>>>>> f92d2c907d976d4390a141525de673a6ac1575cb

class Xian extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="Buloom">
=======
      <div className="Xian">
>>>>>>> f92d2c907d976d4390a141525de673a6ac1575cb
        Hello Xian
        <img src={myImage} width="130" />
      </div>
    );
  }
}

export default compokemon(Xian, {maxHp: 500, element: 'Grass'});
