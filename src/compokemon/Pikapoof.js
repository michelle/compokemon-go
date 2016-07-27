import React from'react';
import compokemon from '../Compokemon';
import './Pikapoof.css';
import myImage from '../images/pikachu.png';

class Pikapoof extends React.Component {
  render() {
    return (
      <div className="Pikapoof">
        Pika Pika
        <img src={myImage} width="130" />
      </div>
    );
  }
}

export default compokemon(Pikapoof, {maxHp: 10000, element: 'Fire'});
