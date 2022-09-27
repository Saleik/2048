import createTable from './functions/createTable.js';
import createCells from './functions/createCells.js';
import addRandomValue from './functions/addRandomValue.js';
import up from './functions/actionsTypes/up.js';
import down from './functions/actionsTypes/down.js';
import left from './functions/actionsTypes/left.js';
import right from './functions/actionsTypes/right.js';

const table = document.querySelector('#table');
const newCells = createCells();

table.innerHTML = newCells;
export const cellsArray = [...document.querySelectorAll('.cell')];

addRandomValue(cellsArray, 2);
const GRID = createTable(cellsArray);
window.addEventListener('keydown', function (e) {
	switch (e.key) {
		case 'ArrowUp':
			up([...document.querySelectorAll('.active')])
			break;
		case 'ArrowDown':
			down([...document.querySelectorAll('.active')])
			break;
		case 'ArrowLeft':
			left([...document.querySelectorAll('.active')])
			break;
		case 'ArrowRight':
			right([...document.querySelectorAll('.active')])
			break;
		default:
      alert('Wrong action! Please use arrow keyboard')
	}
});
