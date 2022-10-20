import createTable from './functions/grid/createTable.js';
import createTiles from './functions/grid/createTiles.js';
import addRandomValue from './functions/cell/addRandomValue.js';
import bestScore from './functions/score/bestScore.js';
import {
  isMobile,
  touchStartHandler,
  touchEndHandler
} from './functions/mobileControls/controls.js';
import eventBody from './functions/grid/eventBody.js';

const table = document.querySelector('#table');
const newTiles = createTiles();

table.innerHTML = newTiles;

export const tilesArray = [...document.querySelectorAll('.tile')];

addRandomValue(tilesArray, 2);
createTable(tilesArray);
if (localStorage.getItem('best-score')) bestScore()


if(isMobile()){
  const grid = document.querySelector('#table');
  grid.addEventListener("touchstart", touchStartHandler);
  grid.addEventListener("touchend", touchEndHandler);
}else{
  window.addEventListener('keydown',(e) => {
    if(["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault()
    eventBody(e.key)
  });
}
