import createTable from './functions/createTable.js';
import createCells from './functions/createCells.js';
import addRandomValue from './functions/addRandomValue.js';
import hasWon from './functions/hasWon.js';
import cellOneByOne from './functions/actionsTypes/moveCell.js';

const table = document.querySelector('#table');
const newCells = createCells();

table.innerHTML = newCells;
//variables globals
export const cellsArray = [...document.querySelectorAll('.cell')];

addRandomValue(cellsArray, 2);
const GRID = createTable(cellsArray);
window.addEventListener('keydown', function (e) {
  hasWon(parseInt(document.querySelector('#total').dataset.total))
  const activesCells = [...document.querySelectorAll('.active')];
  activesCells.forEach((c) => {
    c.classList.remove('scale-up-center', 'flip-scale-up-hor');
    void c.offsetWidth;
  });

  if(e.key === 'ArrowDown' || e.key === 'ArrowRight'){
    cellOneByOne([...document.querySelectorAll('.active')].reverse(), e.key)
  } else{
    cellOneByOne(activesCells, e.key)
  }
});
