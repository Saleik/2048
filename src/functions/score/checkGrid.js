
/**
 * @return {Boolean}
 */
const checkGrid = ()=>{

  let noCombination = true;

  for(let r = 1; r <= 4; r++){
    for(let c = 1; c <= 4; c++){
      const curr = +document.querySelector(`[id='${r}-${c}']`).firstChild.dataset.value;
      if(r < 4){
        const below = +document.querySelector(`[id='${r + 1}-${c}']`).firstChild.dataset.value;
        if(c < 4){
          const right = +document.querySelector(`[id='${r}-${c +1}']`).firstChild.dataset.value;
          if(curr === below || curr === right) noCombination = false;
        }else{
          if(curr === below) noCombination = false;
        }
      }else if(r === 4 && c < 4 ){
        const right = +document.querySelector(`[id='${r}-${c +1}']`).firstChild.dataset.value;
        if(curr === right) noCombination = false;
      }
    }
  }

  return noCombination
}

export default checkGrid;
