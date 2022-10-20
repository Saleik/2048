import { tilesArray } from '../../index.js';
import addRandomValue from './addRandomValue.js';
import domUpdate from './domUpdate.js';
import score from '../score/score.js';
import isValid from './isValid.js'

let nbrMovesCell = 0;
let count = 0;
/**
 *Manage addition and movements cells on the grid
 * @param {int} row
 * @param {int} col
 * @param {HTMLElement} cell
 * @param {string} action
 * @param {string} operator
 * @returns {Self}
 */
const move = (row, col, cell, action, operator = '+') =>{
  if(!isValid(row, col, action)) return;
  const next = ()=> {
    if(action === 'ArrowUp' || action === 'ArrowDown') return operator === '-' ? row - 1 : parseInt(row) + 1;
    else return operator === '-' ? col - 1 : parseInt(col) + 1;
  }

	const newPos = action === 'ArrowUp' || action === 'ArrowDown'
  ? next() + '-' + col
  : row +'-'+ next();
	const target = document.getElementById(newPos);

  if(target.hasChildNodes()){
    let child = target.firstChild;
    const total = addition(child, cell);
    if(total){
      domUpdate(target,cell, child, total);
      score(total), nbrMovesCell++;
      count++;
    }else{
      return;
    }
  }else{
    domUpdate(target, cell), nbrMovesCell++;
  }

  if(action === 'ArrowUp' || action === 'ArrowDown') return move(next(), col, cell, action, operator);
  else return move(row, next(), cell, action, operator);
}

const addition = (next, curr) =>{
  const nextToNumber = parseInt(next.dataset.value);
  const currToNumber = parseInt(curr.dataset.value);
  if(nextToNumber === currToNumber && count <= 0){
    return currToNumber + nextToNumber;
  }else{
    return false;
  }
}

const oneByOne = (actives, action) =>{
  for (const cell of actives) {
		let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
    if(action === 'ArrowUp' || action === 'ArrowLeft') move(row, col, cell, action, '-');
		else move(row, col, cell, action);
    count = 0;
	}

  if(nbrMovesCell > 0){
    addRandomValue(tilesArray, 1);
    nbrMovesCell = 0;
  }
}

export default oneByOne;
