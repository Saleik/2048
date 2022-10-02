import { cellsArray } from '../../index.js';
import addRandomValue from '../addRandomValue.js';
import score from '../score.js';

let nbrMovesCell = 0

const move = (row, col, cell, action, operator = '+') =>{
  if(!isValid(row, col, action)) return;
  let count = 0;
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
    const total = addition(child, cell, count);
    if(total){
      domUpdate(target,cell, child, total);
      score(total), nbrMovesCell++, count++;
    }else{
      return;
      ;
    }
  }
  domUpdate(target, cell), nbrMovesCell++;

  if(action === 'ArrowUp' || action === 'ArrowDown') return move(next(), col, cell, action, operator);
  else return move(row, next(), cell, action, operator);
}

const isValid = (row, col, action) =>{
  switch (action) {
    case 'ArrowUp':
      return row > 1;
    case 'ArrowDown':
      return row < 4;
    case 'ArrowLeft':
      return col > 1;
    case 'ArrowRight':
      return col < 4;
  }
}

const addition = (next, curr, count) =>{
  const nextToNumber = parseInt(next.dataset.value);
  const currToNumber = parseInt(curr.dataset.value);
  if(nextToNumber === currToNumber && count <= 0) return currToNumber + nextToNumber;
  else return false;
}

const domUpdate = (target, curr, next = '', total = 0) =>{
  if(next !== '' && total > 0){
    curr.dataset.value = total;
    curr.innerText = total;
    curr.classList.add('flip-scale-up-hor');
    next.remove()
    target.appendChild(curr);
  }else{
    curr.classList.add('scale-up-center');
	  target.appendChild(curr);
  }
}


const cellOneByOne = (actives, action) =>{
  for (const cell of actives) {
		let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
    if(action === 'ArrowUp' || action === 'ArrowLeft') move(row, col, cell, action, '-');
		else move(row, col, cell, action);
	}
  if(nbrMovesCell > 0){
    addRandomValue(cellsArray, 1);
    nbrMovesCell = 0;
  }
}

export default cellOneByOne;
