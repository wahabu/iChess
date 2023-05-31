import PropTypes from 'prop-types';
import Tile from '../Tile/Tile';
import './Chessboard.css';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];
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

pieces.push({image: "assets/images/br.png", x: 0, y: 7})
pieces.push({image: "assets/images/br.png", x: 7, y: 7})
pieces.push({image: "assets/images/bn.png", x: 6, y: 7})
pieces.push({image: "assets/images/bn.png", x: 1, y: 7})
pieces.push({image: "assets/images/bb.png", x: 2, y: 7})
pieces.push({image: "assets/images/bb.png", x: 5, y: 7})
pieces.push({image: "assets/images/bq.png", x: 4, y: 7})
pieces.push({image: "assets/images/bk.png", x: 3, y: 7})

pieces.push({image: "assets/images/wr.png", x: 0, y: 0})
pieces.push({image: "assets/images/wr.png", x: 7, y: 0})
pieces.push({image: "assets/images/wn.png", x: 6, y: 0})
pieces.push({image: "assets/images/wn.png", x: 1, y: 0})
pieces.push({image: "assets/images/wb.png", x: 2, y: 0})
pieces.push({image: "assets/images/wb.png", x: 5, y: 0})
pieces.push({image: "assets/images/wq.png", x: 4, y: 0})
pieces.push({image: "assets/images/wk.png", x: 3, y: 0})

function Chessboard() {
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

  return <div id="chessboard">{board}</div>;
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