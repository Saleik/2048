import oneByOne from "../cell/move.js";
import hasWon from "../score/hasWon.js";
const eventBody = (action) =>{
  hasWon(parseInt(document.querySelector('#total').dataset.total));
  const activesCells = [...document.querySelectorAll('.active')];
  activesCells.forEach((c) => {
    c.classList.remove('scale-up-center', 'flip-scale-up-hor');
    void c.offsetWidth;
  });

  if(action === 'ArrowDown' || action === 'ArrowRight'){
    oneByOne(activesCells.reverse(), action)
  } else{
    oneByOne(activesCells, action)
  }
}

export default eventBody
