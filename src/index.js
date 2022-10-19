import createTable from './functions/grid/createTable.js';
import createTiles from './functions/grid/createTiles.js';
import addRandomValue from './functions/cell/addRandomValue.js';
import hasWon from './functions/score/hasWon.js';
import oneByOne from './functions/cell/move.js';
import bestScore from './functions/score/bestScore.js';

const table = document.querySelector('#table');
const newTiles = createTiles();

table.innerHTML = newTiles;

export const tilesArray = [...document.querySelectorAll('.tile')];

addRandomValue(tilesArray, 2);
createTable(tilesArray);

if (localStorage.getItem('best-score')) bestScore()

window.addEventListener('keydown', function (e) {

  if(["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault()

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
