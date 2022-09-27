import { cellsArray } from '../../index.js';
import addRandomValue from '../addRandomValue.js';
/**
 *
 * @param {int} row
 * @param {int} col
 * @param {Node} node
 * @returns recursive function
 */
const moveLeft = (row, col, node) => {
  if(col === 1 ) return;

  let newPos = row + '-' + (col - 1);
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
	return moveLeft(row , col - 1, node);
}

const left = (active) =>{
  for(const cell of active){
    let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
    if (col > 1 ) {
			moveLeft(row, col, cell);
		}
  }
  addRandomValue(cellsArray, 1)
}

export default left
