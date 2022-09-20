/**
 *
 * @param {int} row
 * @param {int} col
 * @param {Node} node
 * @param {string} type
 * @returns  recursive function
 */
 const upCell = (row, col, node) =>{
	if(row === 1) return;

	let newPos = row - 1 + '-' + col;
	let next = document.getElementById(newPos);

	if (next.hasChildNodes()) {
		let child = next.firstChild;
		if (parseInt(child.dataset.value) === parseInt(node.dataset.value)) {
			let total = Math.floor(
				parseInt(child.dataset.value) + parseInt(node.dataset.value)
			);

			node.dataset.value = total;
			node.innerText = total;
			child.remove();
			next.appendChild(node);
		} else {
			return;
		}
	}
	next.appendChild(node);
	return upCell(row - 1, col, node);
}

export default upCell
