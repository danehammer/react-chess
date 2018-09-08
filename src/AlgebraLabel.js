import React, { Component } from 'react';
import './AlgebraLabel.css';

class AlgebraLabel extends Component {

  render() {
    const className = `algebra ${this.props.pos}`
    return (
      <label className={className}>{this.props.value}</label>
    );
  }
}

export default AlgebraLabel;