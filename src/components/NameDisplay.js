import React from 'react';

import './NameDisplay.css';

class NameDisplay extends React.Component {
  render() {
    return (
      <div style={{background: 'red'}} className="NameDisplay">
        {this.props.name || this.props.type}
      </div>
    );
  }
}

export default NameDisplay;
