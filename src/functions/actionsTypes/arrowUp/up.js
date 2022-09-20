import { cellsArray } from '../../../index.js';
import addRandomValue from '../../addRandomValue.js';
/**
 * @param {int} row
 * @param {int} col
 * @param {Node} node
 * @param {string} type
 * @returns  recursive function
 */
 const moveUp = (row, col, node) =>{
	if(row === 1) return;

	let newPos = row - 1 + '-' + col;
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
