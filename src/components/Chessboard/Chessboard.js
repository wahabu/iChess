import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';
import './Chessboard.css';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];

for(let p =0; p < 2; p++) {
  const type = (p === 0) ? "b" : "w";
  const y = (p === 0) ? 7 : 0;

  pieces.push({image: `assets/images/${type}r.png`, x: 0, y});
  pieces.push({image: `assets/images/${type}r.png`, x: 7, y});
  pieces.push({image: `assets/images/${type}n.png`, x: 6, y});
  pieces.push({image: `assets/images/${type}n.png`, x: 1, y});
  pieces.push({image: `assets/images/${type}b.png`, x: 2, y});
  pieces.push({image: `assets/images/${type}b.png`, x: 5, y});
  pieces.push({image: `assets/images/${type}q.png`, x: 3, y});
  pieces.push({image: `assets/images/${type}k.png`, x: 4, y});
}

for (let i =0; i < 8; i++) {
  pieces.push({
    image: "assets/images/bp.png",
    x: i,
    y: 6
  });
}

for (let i =0; i < 8; i++) {
  pieces.push({
    image: "assets/images/wp.png",
    x: i,
    y: 1
  });
}
function Chessboard() {
  const chessboardRef = React.useRef(null);

  let activePiece = null;

function grabPiece(e) {
  const element = e.target;
  if(element.classList.contains("chess-piece")) {
    console.log(e);

    const x = e.clientX - 50;
    const y = e.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
}

function movePiece(e) {
  const chessboard = chessboardRef.current;
  if (activePiece && chessboard) {
    const minX = chessboard.offsetLeft - 25;
    const minY = chessboard.offsetTop;
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";
    // activePiece.style.left = `${x}px`;
    // activePiece.style.top = `${y}px`;

    console.log(chessboard);
    
    activePiece.style.left = x < minX ? activePiece.style.left = `${minX}px` : activePiece.style.left = `${x}px`;
    activePiece.style.top = x < minY ? activePiece.style.top = `${minY}px` : activePiece.style.top = `${y}px`;
  }
}

function dropPiece(e) {
  if(activePiece) {
    activePiece = null;
  }
}
  let board = [];

  for (let j = verticalAxis.length -1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });
      
      board.push(<Tile image={image} number={number} key={`${i}-${j}`} />);
    }
  }

  return (
  <div 
    onMouseMove={(e) => movePiece(e)}
    onMouseDown={(e) => grabPiece(e)}
    onMouseUp={(e) => dropPiece(e)}
    id="chessboard"
    ref={chessboardRef}
  >
    {board}
  </div>
  );
}

Chessboard.propTypes = {
  pieces: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number
    })
  )
};

export default Chessboard;