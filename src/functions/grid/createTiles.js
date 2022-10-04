/**
 * @returns {String}
 */

const createTiles= () => {
	let tiles = '';
	let rowNbr = 0;
	let tileNbr = 1;
	for (let i = 0; i < 16; i++) {
		if (i % 4 === 0) {
			rowNbr++;
			tileNbr = 1;
		} else {
			tileNbr++;
		}

		let tile = `<div class="tile" id="${rowNbr}-${tileNbr}"></div>`;

		tiles += tile;
	}

	return tiles;
}

export default createTiles
