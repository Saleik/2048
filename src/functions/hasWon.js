const hasWon = (total)=>{
  if(total === 2048){
    alert(`SCORE: ${total}\n`+ 'You Win Gratz Folks!!!🥳')
    return location.reload()
  }else if(total > 2048){
    alert(`SCORE: ${total}\n` + 'You Loose...Too Bad😭')
    return location.reload()
  }
}

export default hasWon;
