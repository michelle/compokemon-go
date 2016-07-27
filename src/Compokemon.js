import React, {PropTypes, Component} from 'react';
import _ from 'lodash';

import NameDisplay from './components/NameDisplay';
import ElementDisplay from './components/ElementDisplay';
import HpDisplay from './components/HpDisplay';
import CpDisplay from './components/CpDisplay';
import HealButton from './components/HealButton';

import './Compokemon.css';

const Compokemon = (CustomCompokemon, opts = {}) => class extends Component {
  static propTypes = {
    maxHp: PropTypes.number,
    element: PropTypes.oneOf([
      'Normal',
      'Grass',
      'Water',
      'Fire',
      'Electric',
      'Ghost',
      'Ground',
      'Psychic',
      'Flying',
      'Poison',
      'Rock',
      'Water',
      'Fighting',
      'Dragon',
      'Ice',
    ]),

    currentHp: PropTypes.number,
    name: PropTypes.string,
    onNameChange: PropTypes.func,
    onHeal: PropTypes.func,

    readOnly: PropTypes.bool,
  }
  static defaultProps = {
    currentHp: 0,
    changeName: _.noop,
    maxHp: 100,
    combatPower: 500,
    element: 'Normal',
    readOnly: false,
    ...opts,
  }

  handleNameChange = (name) => {
    if (this.props.onNameChange) {
      this.props.onNameChange(name);
    }
  }
  handleHeal = () => {
    if (this.props.onHeal) {
      this.props.onHeal(name);
    }
  }

  render() {
    // Enhance the base Compokemon with more display elements!
    return (
      <div className="Compokemon">
        <div className="Compokemon-inner">
          <CustomCompokemon {...this.props} />
        </div>

        <ElementDisplay element={this.props.element} />

        {!this.props.readOnly && <HpDisplay currentHp={this.props.currentHp} maxHp={this.props.maxHp} />}
        {!this.props.readOnly && <HealButton onHeal={this.handleHeal} />}
        {!this.props.readOnly && <CpDisplay combatPower={this.props.combatPower} />}

        <NameDisplay readOnly={this.props.readOnly} onNameChange={this.handleNameChange} name={this.props.name} type={this.props.type} />
        <HealButton onHeal={this.handleHeal} />
      </div>
    );
  }
}

export default Compokemon;
