import { cellsArray } from '../../index.js';
import addRandomValue from '../addRandomValue.js';
import score from '../score.js';
/**
 *
 * @param {int} row
 * @param {int} col
 * @param {Node} node
 * @returns recursive function
 */
const moveLeft = (row, col, node) => {
  if(col === 1 ) return;
  let count = 0;
  let newPos = row + '-' + (col - 1);
	let next = document.getElementById(newPos);
  node.classList.remove('scale-up-center','flip-scale-up-hor','flip-scale-up-ver')
  if (next.hasChildNodes()) {
		let child = next.firstChild;
		if (parseInt(child.dataset.value) === parseInt(node.dataset.value) && count === 0) {
			let total = Math.floor(
				parseInt(child.dataset.value) + parseInt(node.dataset.value)
			);

			node.dataset.value = total;
			node.innerText = total;
      node.classList.add('flip-scale-up-ver')
			child.remove();
			next.appendChild(node);
      score(total);
      count++
      return;
		} else {
			return;
		}
	}
  node.classList.add('scale-up-center')
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
