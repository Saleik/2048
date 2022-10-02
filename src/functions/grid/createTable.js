/**
 * @param {array} array
 * @returns array
 */
 const createTable = (array) => {
	let tableRows = [];
	let row = [];

	for (let i = 1; i <= array.length; i++) {
		if (i % 4 === 0) {
			row.push(array[i - 1]);
			tableRows.push(row);
			row = [];
		} else {
			row.push(array[i - 1]);
		}
	}

	return tableRows;
}

export default createTable
