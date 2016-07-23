import React, {Component} from 'react';
import './Compokemon.css';

const Compokemon = (CustomCompokemon) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="Compokemon">
        <CustomCompokemon {...this.props} />
      </div>
    );
  }
}

export default Compokemon;
