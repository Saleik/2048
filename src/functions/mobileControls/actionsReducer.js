const actionsReducer = (coordinates) =>{
  const x = coordinates.start.x - coordinates.end.x
  const y = coordinates.start.y - coordinates.end.y
  switch (true) {
    case Math.abs(x) > 30 && x < 0:
      return 'ArrowRight'
    case x > 30 && x > 0:
      return 'ArrowLeft'
    case y > 0:
      return 'ArrowUp'

    case y < 0:
      return 'ArrowDown'
    default:
      return
  }
}

export default actionsReducer
