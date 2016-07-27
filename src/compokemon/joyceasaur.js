import React from 'react';
import compokemon from '../Compokemon';
import './Joyce.css';
import joyce from '../images/kitten2.png';
import stripe from '../images/stripe.png';

class Joyce extends React.Component {
  render() {
    return (
      <div className="Joyce">
        <img src={joyce} className="Joyce" width="130" />
        // <img src={stripe} className="StripeLogo" width="130" />
      </div>
    );
  }
}

export default compokemon(Joyce, {maxHp: 9000, element: 'Grass'});
