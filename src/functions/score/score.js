/**
 * compute total score
 * @param {int} value
 */
const score = (value)=>{
  const totalContainer = document.querySelector('#total');
  totalContainer.dataset.total = parseInt(totalContainer.dataset.total) + value
  totalContainer.innerHTML = totalContainer.dataset.total;
}

export default score;
