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

export default domUpdate;
