import createTable from './functions/grid/createTable.js';
import createTiles from './functions/grid/createTiles.js';
import addRandomValue from './functions/cell/addRandomValue.js';
import hasWon from './functions/score/hasWon.js';
import oneByOne from './functions/cell/move.js';

const table = document.querySelector('#table');
const newTiles = createTiles();

table.innerHTML = newTiles;
//variables globals
export const tilesArray = [...document.querySelectorAll('.tile')];

//TODO:wip in hasWon function
addRandomValue(tilesArray, 16);
const GRID = createTable(tilesArray);
window.addEventListener('keydown', function (e) {
  hasWon(parseInt(document.querySelector('#total').dataset.total))
  const activesCells = [...document.querySelectorAll('.active')];
  activesCells.forEach((c) => {
    c.classList.remove('scale-up-center', 'flip-scale-up-hor');
    void c.offsetWidth;
  });

  if(e.key === 'ArrowDown' || e.key === 'ArrowRight'){
    oneByOne([...document.querySelectorAll('.active')].reverse(), e.key)
  } else{
    oneByOne(activesCells, e.key)
  }
});
