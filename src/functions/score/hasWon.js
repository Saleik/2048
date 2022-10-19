import checkGrid from "./checkGrid.js";

/**
 * Check if the player has won
 * @param {int} total
 * @returns {}
 */
const hasWon = (total)=>{
  const gridTiles = [...document.querySelectorAll('.tile')];
  const cells = [...document.querySelectorAll('.active')];
  if(gridTiles.length === cells.length && checkGrid()) scoreBoard('You Loose...Too Bad😭', total)

  if(cells.filter(c => +c.dataset.value === 2048).length > 0) scoreBoard('You Win Gratz Folks!!!🥳', total)
}

/**
 * Store in user localStorage  and set ending message
 * @param {string, int}
 * @returns {String}
 */
const scoreBoard = (message, total) =>{
  const bestScore = localStorage.getItem('best-score') ?? null
  if(!bestScore || bestScore < total) localStorage.setItem('best-score', total)
  return alert(`SCORE: ${total}\n` + message), location.reload()
}

export default hasWon;
