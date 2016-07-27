import React from 'react';
import compokemon from '../Compokemon';
import './Bulbastripe.css';
import bulbasaur from '../images/bulbasaur.png';
import stripe from '../images/stripe.png';

class Bulbastripe extends React.Component {
  render() {
    return (
      <div className="Bulbastripe">
        <img src={bulbasaur} className="Bulbasaur" width="130" />
        <img src={stripe} className="StripeLogo" width="130" />
      </div>
    );
  }
}

export default compokemon(Bulbastripe, {maxHp: 9000, element: 'Grass'});
