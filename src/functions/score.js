export const score = (cellsActiveArray)=>{
  const container = document.querySelector('#score-board');
  const values = cellsActiveArray.map(cell => parseInt(cell.dataset.value))

  console.log(values.reduce((prev, curr)=> prev + curr));
}
