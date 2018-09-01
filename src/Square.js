import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  render() {
    const { piece } = this.props;
    return (
      <button
        className={piece ? piece.color : ''}
      >
        {piece ? piece.type : ''}
      </button>
    );
  }
}

export default Square;