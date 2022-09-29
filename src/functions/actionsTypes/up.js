import { cellsArray } from '../../index.js';
import addRandomValue from '../addRandomValue.js';
import score from '../score.js';
/**
 * @param {int} row
 * @param {int} col
 * @param {Node} node
 * @returns  recursive function
 */
 const moveUp = (row, col, node) =>{
	if(row === 1) return;
  let count = 0;
	let newPos = row - 1 + '-' + col;
	let next = document.getElementById(newPos);
  node.classList.remove('flip-scale-up-hor','flip-scale-up-ver')

	if (next.hasChildNodes()) {
		let child = next.firstChild;
		if (parseInt(child.dataset.value) === parseInt(node.dataset.value) && count === 0) {
			let total = Math.floor(
				parseInt(child.dataset.value) + parseInt(node.dataset.value)
			);
			node.dataset.value = total;
			node.innerText = total;
      node.classList.remove('scale-up-center');
      node.classList.add('flip-scale-up-hor');
			child.remove();
			next.appendChild(node);
      score(total);
      count++;
      return;
		} else {
			return;
		}
	}
  node.classList.add('scale-up-center')
	next.appendChild(node);
	return moveUp(row - 1, col, node);
}

/**
 * @param {Array} active
 */
const up = (active) => {
	for (const cell of active) {
		let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
		if (row > 1) {
			moveUp(row, col, cell);
		}
	}
  addRandomValue(cellsArray, 1)
}

export default up
