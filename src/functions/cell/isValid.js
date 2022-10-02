const isValid = (row, col, action) =>{
  switch (action) {
    case 'ArrowUp':
      return row > 1;
    case 'ArrowDown':
      return row < 4;
    case 'ArrowLeft':
      return col > 1;
    case 'ArrowRight':
      return col < 4;
  }
}

export default isValid;
