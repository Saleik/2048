/**
 * @returns html node
 */

const createCells= () => {
	let cells = '';
	let rowNbr = 0;
	let cellNbr = 1;
	for (let i = 0; i < 16; i++) {
		if (i % 4 === 0) {
			rowNbr++;
			cellNbr = 1;
		} else {
			cellNbr++;
		}

		let cell = `<div class="cell" id="${rowNbr}-${cellNbr}"></div>`;

		cells += cell;
	}

	return cells;
}

export default createCells
