import React from 'react';
import compokemon from '../Compokemon';
import './Bethanyg.css';
import bethanyg from '../images/Bethanyg.png';

class Bethanyg extends React.Component {
  render() {
    return (
      <div className="Bethanyg">
        <img src={bethanyg} className="Bethanyg" width="130" />
      </div>
    );
  }
}

export default compokemon(Bethanyg, {maxHp: 9000, element: 'Grass'});
