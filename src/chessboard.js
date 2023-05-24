import React from "react";
import "./chessboard.css";
import blackQuenn from "./images/black-queen.png";
import blackKing from "./images/black-king.png";
import blackRook from "./images/black-rook.png";
import blackKnight from "./images/black-knight.png";
import blackBishop from "./images/black-bishop.png";
import blackPawn from "./images/black-pawn.png";
import whiteQueen from "./images/white-queen.png";
import whiteKing from "./images/white-king.png";
import whiteRook from "./images/white-rook.png";
import whiteknight from "./images/white-knight.png";
import whiteBishop from "./images/white-bishop.png";
import whitePawn from "./images/white-pawn.png";

class ChessBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"],
      ],
    };
  }
  CreateTiles(row, col, piece) {
    const isEven = (row + col) % 2 === 0;
    const tileColor = isEven ? "white" : "black";
    let PieceImage;
    switch (piece) {
      case "r":
        PieceImage = blackRook;
        break;
      case "n":
        PieceImage = blackKnight;
        break;
      case "b":
        PieceImage = blackBishop;
        break;
      case "q":
        PieceImage = blackQuenn;
        break;
      case "k":
        PieceImage = blackKing;
        break;
      case "p":
        PieceImage = blackPawn;
        break;
      case "R":
        PieceImage = whiteRook;
        break;
      case "N":
        PieceImage = whiteknight;
        break;
      case "B":
        PieceImage = whiteBishop;
        break;
      case "Q":
        PieceImage = whiteQueen;
        break;
      case "K":
        PieceImage = whiteKing;
        break;
      case "P":
        PieceImage = whitePawn;
        break;
      default:
        PieceImage = null;
    }
    return (
      <div className={`tile ${tileColor}`}>
        {PieceImage && <img className="piece" src={PieceImage} alt="" />}
      </div>
    );
  }

  Rows(col) {
    const tiles = [];
    for (let row = 0; row < 8; row++) {
      const piece = this.state.board[row][col];
      tiles.push(this.CreateTiles(row, col, piece));
    }
    return <div className="board-columns">{tiles}</div>;
  }
  render() {
    const rows = [];
    for (let col = 0; col < 8; col++) {
      rows.push(this.Rows(col));
    }
    return <div className="chessboard">{rows}</div>;
  }
}
export default ChessBoard;
