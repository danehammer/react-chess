import React, { Component } from 'react';
import './AlgebraLabel.css';

class AlgebraLabel extends Component {

  render() {
    return (
      <span className='algebra'>{this.props.value}</span>
    );
  }
}

export default AlgebraLabel;