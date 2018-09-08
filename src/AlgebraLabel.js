import React, { Component } from 'react';
import './AlgebraLabel.css';

class AlgebraLabel extends Component {

  render() {
    const className = `algebra ${this.props.pos}`
    return (
      <div className={className}>
        <label>{this.props.value}</label>
      </div>
    );
  }
}

export default AlgebraLabel;