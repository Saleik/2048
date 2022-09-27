import createTable from './functions/createTable.js';
import createCells from './functions/createCells.js';
import addRandomValue from './functions/addRandomValue.js';
import up from './functions/actionsTypes/up.js';
import down from './functions/actionsTypes/down.js';

const table = document.querySelector('#table');
const newCells = createCells();

table.innerHTML = newCells;
export const cellsArray = [...document.querySelectorAll('.cell')];

addRandomValue(cellsArray, 2);
const GRID = createTable(cellsArray);
window.addEventListener('keydown', function (e) {
  console.log(e.key)
	switch (e.key) {
		case 'ArrowUp':
			up([...document.querySelectorAll('.active')])
			break;
		case 'ArrowDown':
			down([...document.querySelectorAll('.active')], e.key)
			break;
		default:
      console.error('Wrong action')
	}
});
