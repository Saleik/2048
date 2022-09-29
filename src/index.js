import createTable from './functions/createTable.js';
import createCells from './functions/createCells.js';
import addRandomValue from './functions/addRandomValue.js';
import up from './functions/actionsTypes/up.js';
import down from './functions/actionsTypes/down.js';
import left from './functions/actionsTypes/left.js';
import right from './functions/actionsTypes/right.js';
import hasWon from './functions/hasWon.js';
import oneByOne from './functions/actionsTypes/moveCell.js';

const table = document.querySelector('#table');
const newCells = createCells();

table.innerHTML = newCells;
//variables globals
export const cellsArray = [...document.querySelectorAll('.cell')];

addRandomValue(cellsArray, 2);
const GRID = createTable(cellsArray);
window.addEventListener('keydown', function (e) {
  hasWon(parseInt(document.querySelector('#total').dataset.total))
	switch (e.key) {
		case 'ArrowUp':
			oneByOne([...document.querySelectorAll('.active')], e.key);
			break;
		case 'ArrowDown':
			oneByOne([...document.querySelectorAll('.active')], e.key);
			break;
		case 'ArrowLeft':
			left([...document.querySelectorAll('.active')]);
			break;
		case 'ArrowRight':
			right([...document.querySelectorAll('.active')]);
			break;
		default:
      alert('Wrong action! Please use arrow keyboard');
	}
});

//test area
