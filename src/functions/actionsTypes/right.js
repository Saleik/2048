import { cellsArray } from '../../index.js';
import addRandomValue from '../addRandomValue.js';
/**
 *
 * @param {int} row
 * @param {int} col
 * @param {Node} node
 * @returns recursive function
 */
const moveRight = (row, col, node) => {
  if(col === 4 ) return;

  let newPos = row + '-' + (parseInt(col) + 1);
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
      return
		} else {
			return;
		}
	}
  next.appendChild(node);
	return moveRight(row , (parseInt(col) + 1), node);
}

const right = (active) =>{
  for(const cell of active.reverse()){
    const rowAndCol = cell.parentNode.id.split('-');
    let row = rowAndCol[0];
		let col = rowAndCol[1];
    if (col < 4 ) {
			moveRight(row, col, cell);
		}
  }
  addRandomValue(cellsArray, 1)
}

export default right
