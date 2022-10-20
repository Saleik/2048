const isMobile = () => {
  // const mobileDevice  = navigator.userAgentData.mobile;
  return true
}
const touchStartHandler = (e) => {
return {
  x: e.touches[0].pageX,
  y: e.touches[0].pageY
}

}

const touchEndHandler = (e) => {
  console.log(e.changedTouches)
}

export {
  isMobile,
  touchStartHandler,
  touchEndHandler
}
