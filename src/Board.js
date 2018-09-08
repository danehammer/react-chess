import React, { Component } from 'react';
import './Board.css';
import Square from './Square';
import AlgebraLabel from './AlgebraLabel';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { pieces: this._newDefault() };
  }

  _newDefault() {
    const pieces = new Map();
    const whiteRook = { color: 'white', type: 'rook' };
    const whiteKnight = { color: 'white', type: 'knight' };
    const whiteBishop = { color: 'white', type: 'bishop' };
    const whiteQueen = { color: 'white', type: 'queen' };
    const whiteKing = { color: 'white', type: 'king' };
    pieces.set('a', [
      whiteRook,
      whiteKnight,
      whiteBishop,
      whiteQueen,
      whiteKing,
      whiteBishop,
      whiteKnight,
      whiteRook
    ]);
    const whitePawn = { color: 'white', type: 'pawn' };
    const whitePawns = Array(8).fill(whitePawn);
    pieces.set('b', whitePawns);

    const blackPawn = { color: 'black', type: 'pawn' };
    const blackPawns = Array(8).fill(blackPawn);
    pieces.set('g', blackPawns);

    const blackRook = { color: 'black', type: 'rook' };
    const blackKnight = { color: 'black', type: 'knight' };
    const blackBishop = { color: 'black', type: 'bishop' };
    const blackKing = { color: 'black', type: 'king' };
    const blackQueen = { color: 'black', type: 'queen' };
    pieces.set('h', [
      blackRook,
      blackKnight,
      blackBishop,
      blackQueen,
      blackKing,
      blackBishop,
      blackKnight,
      blackRook
    ]);
    return pieces;
  }

  render() {
    const { pieces } = this.state;
    const rows = [];

    const topAlgebraRow = [];
    for (let i = 8; i >= 1; i--) {
      topAlgebraRow.push(<AlgebraLabel key={'9' + i} value={i} />);
    }
    rows.push(<div className='row top' key='9row'>{topAlgebraRow}</div>);

    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach((i) => {
      const squares = [];
      squares.push(<AlgebraLabel key={i + 0} value={i} />);
      const rowPieces = pieces.get(i);
      // Going left to right, top to bottom means we start at A8
      for (let j = 8; j >= 1; j--) {
        let piece;
        if (rowPieces) {
          console.log(rowPieces);
          // offset into state
          piece = rowPieces[j - 1];
        }
        if (piece) {
          squares.push(<Square key={i + j} piece={piece} />);
        } else {
          squares.push(<Square key={i + j} />);
        }
      }
      squares.push(<AlgebraLabel key={i + 9} value={i} />);
      rows.push(<div className='row' key={'row' + i}>{squares}</div>);
    });

    const bottomAlgebraRow = [];
    for (let i = 8; i >= 1; i--) {
      bottomAlgebraRow.push(<AlgebraLabel key={'0' + i} value={i} />);
    }
    rows.push(<div className='row' key='0row'>{bottomAlgebraRow}</div>);

    return (
      <div className='board'>
        {rows}
      </div>
    );
  }
}

export default Board;