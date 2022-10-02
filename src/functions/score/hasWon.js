/**
 * Check if the player has won
 * @param {int} total
 * @returns
 */
const hasWon = (total)=>{

  const gridTiles = [...document.querySelectorAll('.tile')];
  const cells = [...document.querySelectorAll('.active')];
  if(total === 2048){
    alert(`SCORE: ${total}\n`+ 'You Win Gratz Folks!!!🥳')
    return location.reload()
  }else if(total > 2048 ){
    alert(`SCORE: ${total}\n` + 'You Loose...Too Bad😭')
    return location.reload()
  }else if(gridTiles.length === cells.length) {

    for( let i = 0; i < gridTiles.length; i++ ){
      let row = parseInt(gridTiles[i].id.split('-')[0]);
      let col = parseInt(gridTiles[i].id.split('-')[1]);

      if(row === 1 ||row === 4 ){
        if(row === 1 ){
          const cellBelow = document.querySelector(`[id='${row+1}-${col}']`).firstChild.dataset.value;
          console.log(cellBelow)
        }
      }else if(col === 1 ||col === 4 ){
        console.log('toto')
      }
    }
  }
}

export default hasWon;
