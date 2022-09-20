import upCell from './upCell.js';
/**
 * @param {Array} active
 */
export default function upAction(active, type) {
	for (const cell of active) {
		let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
		if (row > 1) {
			upCell(row, col, cell, type);
		}
	}
}
