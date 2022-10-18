const bestScore = ()=>{
  const el = document.querySelector('#best');
  el.dataset.best = localStorage.getItem('best-score') ?? 0
  el.innerText = `${localStorage.getItem('best-score') ?? 0}`
}

export default bestScore
