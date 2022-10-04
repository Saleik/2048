import checkGrid from "./checkGrid.js";

/**
 * Check if the player has won
 * @param {int} total
 * @returns
 */
const hasWon = (total)=>{

  const gridTiles = [...document.querySelectorAll('.tile')];
  const cells = [...document.querySelectorAll('.active')];
  if(total === 2048){
    alert(`SCORE: ${total}\n`+ 'You Win Gratz Folks!!!🥳');
    return location.reload();
  }else if(total > 2048 ){
    alert(`SCORE: ${total}\n` + 'You Loose...Too Bad😭');
    return location.reload();
  }else if(gridTiles.length === cells.length) {
    return checkGrid() && alert(`SCORE: ${total}\n` + 'You Loose...Too Bad😭')
  }
}

export default hasWon;
