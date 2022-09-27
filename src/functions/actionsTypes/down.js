import { cellsArray } from '../../index.js';
import addRandomValue from '../addRandomValue.js';
/**
 *
 * @param {int} row
 * @param {int} col
 * @param {Node} node
 * @returns recursive function
 */
const moveDown = (row, col, node) => {
  if(row === 4) return;

  let newPos = parseInt(row) + parseInt(1) + '-' + col;
  console.log(newPos)
	let next = document.getElementById(newPos);

  if (next.hasChildNodes()) {
		let child = next.firstChild;
		if (parseInt(child.dataset.value) === parseInt(node.dataset.value)) {
			let total = Math.floor(
				parseInt(child.dataset.value) + parseInt(node.dataset.value)
			);

			node.dataset.value = total;
			node.innerText = total;
			child.remove();
			next.appendChild(node);
		} else {
			return;
		}
	}
  next.appendChild(node);
	return moveDown(parseInt(row) + parseInt(1), col, node);
}

const down = (active) =>{
  for(const cell of active){
    let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
    if (row < 4 ) {
			moveDown(row, col, cell);
		}
  }
  addRandomValue(cellsArray, 1)
}

export default down
