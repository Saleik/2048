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
const moveDown = (row, col, node) => {
  if(row === 4) return;

  let count = 0;
  let newPos = parseInt(row) + parseInt(1) + '-' + col;
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
      node.classList.add('flip-scale-up-hor')
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
	return moveDown(parseInt(row) + 1, col, node);
}

const down = (active) =>{
  for(const cell of active.reverse()){
    let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
    if (row < 4 ) {
			moveDown(row, col, cell);
		}
  }
  addRandomValue(cellsArray, 1)
}

export default down
