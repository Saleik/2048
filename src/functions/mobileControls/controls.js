import eventBody from "../grid/eventBody.js"
import actionsReducer from "./actionsReducer.js"

const isMobile = () => {
    const ua = navigator.userAgent;
    const tabletRegex = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i;
    const mobRegex = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/;

    return tabletRegex.test(ua) || mobRegex.test(ua)
}

let start = {}
const touchStartHandler = (e) => {
  start = {
    x: e.touches[0].pageX,
    y: e.touches[0].pageY
  }
  console.log(start);
}

const touchEndHandler = (e) => {
  const action = actionsReducer({
    start: start,
    end: {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    }
  });
  eventBody(action);
}

export {
  isMobile,
  touchStartHandler,
  touchEndHandler
}
