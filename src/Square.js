import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  render() {
    const { piece, highlight } = this.props;
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
            highlight
              ?
              <div classname='highlight' />
              :
              null
        }
      </div>
    );
  }
}

export default Square;