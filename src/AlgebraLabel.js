import React, { Component } from 'react';
import './AlgebraLabel.css';

class AlgebraLabel extends Component {

  render() {
    return (
      <label className='algebra'>{this.props.value}</label>
    );
  }
}

export default AlgebraLabel;