import checkGrid from "./checkGrid.js";

/**
 * Check if the player has won
 * @param {int} total
 * @returns
 */
const hasWon = (total)=>{
  const gridTiles = [...document.querySelectorAll('.tile')];
  const cells = [...document.querySelectorAll('.active')];
  if(gridTiles.length === cells.length && checkGrid())
    return alert(`SCORE: ${total}\n` + 'You Loose...Too Bad😭'), location.reload()
  if(total >= 2048)
    return alert(`SCORE: ${total}\n`+ total === 2048 ? 'You Win Gratz Folks!!!🥳':'You Loose...Too Bad😭'), location.reload();
}

export default hasWon;
