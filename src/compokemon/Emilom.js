import React from 'react';
import compokemon from '../Compokemon';
import './Emilom.css';
import bulbasaur from '../images/bulbasaur.png';

class Emilom extends React.Component {
  render() {
    return (
      <div className="Emilom">
        <img src={bulbasaur} className="Emilom" width="130" />
      </div>
    );
  }
}

export default compokemon(Emilom, {maxHp: 9000, element: 'Grass'});
