import { cellsArray } from '../../index.js';
import addRandomValue from '../addRandomValue.js';
import score from '../score.js';

let nbrMovesCell = 0

const move = (row, col, cell, action) =>{
  if(!isValid(row, col, action)) return;
  let count = 0;
	const newPos = row - 1 + '-' + col;
	const target = document.getElementById(newPos);

  if(cell.className.includes('flip-scale-up-hor') || cell.className.includes('flip-scale-up-ver')){
    cell.classList.remove('flip-scale-up-hor','flip-scale-up-ver')
  }

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

  switch(action) {
    case 'ArrowUp':
       return move(row - 1, col, cell, action);
    case 'ArrowDown':
       return move(row + 1, col, cell, action);
  }
}

const isValid = (row, col, action) =>{
  console.log(action)
  switch (action) {
    case 'ArrowUp':
      return row > 1;
    case 'ArrowDown':
      return row < 4;
  }
}

const addition = (next, curr, count) =>{
  const nextToNumber = parseInt(next.dataset.value);
  const currToNumber = parseInt(curr.dataset.value);
  if(nextToNumber === currToNumber && count <= 0) return currToNumber + nextToNumber
  else return false;
}

const domUpdate = (target, curr, next = '', total = 0) =>{
  if(next !== '' && total > 0){
    curr.dataset.value = total;
    curr.innerText = total;
    curr.classList.remove('scale-up-center');
    curr.classList.add('flip-scale-up-hor');
    next.remove();
    target.appendChild(curr);
  }else{
    curr.classList.add('scale-up-center')
	  target.appendChild(curr);
  }
}

const oneByOne = (active, action) =>{
  for (const cell of active) {
		let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
		move(row, col, cell, action);
	}
  if(nbrMovesCell > 0){
    addRandomValue(cellsArray, 1);
    nbrMovesCell = 0;
  }
}

export default oneByOne;
