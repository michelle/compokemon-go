import React from 'react';
import compokemon from '../Compokemon';
import './Deonna.css';
import myImage from '../images/deonna.jpg';

class Deonna extends React.Component {
    render() {
        return (
            <div className="Deonna">
                <img src={myImage} width="200" />
            </div>
        );
    }
}

export default compokemon(Deonna, {maxHp: 1000000000000000, element: 'Fire'});
