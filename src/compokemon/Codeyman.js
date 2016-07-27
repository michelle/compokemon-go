import React from 'react';
import compokemon from '../Compokemon';
import './Bulbastripe.css';
import bulbasaur from '../images/bulbasaur.png';
import stripe from '../images/cataviator.jpg';

class Bulbastripe extends React.Component {
  render() {
    return (
      <div className="Bulbastripe">
        
        <img src={stripe} className="StripeLogo" width="130" />
      </div>
    );
  }
}

export default compokemon(Bulbastripe, {maxHp: 9000, element: 'Grass'});
