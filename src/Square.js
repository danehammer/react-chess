import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  render() {
    const { piece } = this.props;
    let className = '';
    if (piece) {
      className = `piece ${piece.color} ${piece.type}`;
    }
    return (
      <div className='square'>
        {
          piece
            ?
            <img className={className} src={require('./images/pieces.png')} alt='' />
            :
            null
        }
      </div>
    );
  }
}

export default Square;