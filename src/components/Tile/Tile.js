import './Tile.css';

// interface Props {
//   number: number;
// }

export default function Tile({number}) {
  if (number % 2 === 0) {
    return <div className="tile black-tile"><img src="assets/images/bp.png" /></div>;
  } else {
    return <div className="tile white-tile"></div>;
  }
}