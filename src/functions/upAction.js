import { cellsArray } from '../index.js';
import addRandomValue from './addRandomValue.js';
import upCell from './upCell.js';
/**
 * @param {Array} active
 */
export default function upAction(active) {
	for (const cell of active) {
		let row = cell.parentNode.id.split('-')[0];
		let col = cell.parentNode.id.split('-')[1];
		if (row > 1) {
			upCell(row, col, cell);
		}
	}
  addRandomValue(cellsArray, 1)
}
