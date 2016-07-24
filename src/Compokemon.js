import React, {PropTypes, Component} from 'react';
import _ from 'lodash';

import NameDisplay from './components/NameDisplay';
import HpDisplay from './components/HpDisplay';

import './Compokemon.css';

const Compokemon = (CustomCompokemon, opts = {}) => class extends Component {
  static propTypes = {
    // maxHp and type should be supplied by your custom Compokemon!
    maxHp: PropTypes.number.isRequired,
    type: PropTypes.oneOf([
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
    changeName: PropTypes.func,
  }
  static defaultProps = {
    currentHp: 0,
    changeName: _.noop,
  }

  constructor(props) {
    super({...opts, ...props});
  }

  handleNameChange = (name) => {
    this.changeName(name);
  }

  render() {
    return (
      <div className="Compokemon">
        <CustomCompokemon {...this.props} />
        <HpDisplay currentHp={this.props.currentHp} maxHp={this.props.maxHp} />
        <NameDisplay onChange={this.handleNameChange} name={this.props.name} type={this.props.type} />
      </div>
    );
  }
}

export default Compokemon;
