/**
 * Add the value 2 to two random boxes at the beginning
 * @param {*} nodeList
 * @param {*} nbr
 * @returns recursive function
 */

const addRandomValue = (nodeArr, nbr) => {
	let count = nbr;

	if (count <= 0) return;

	const rand = Math.floor(Math.random() * (nodeArr.length - 1));
	const currNode = nodeArr[rand];
	let newNode = document.createElement('div');
  const value = ['2', '4'][Math.floor(Math.random() * 2)]
  console.log(value);
	newNode.innerText = value
	newNode.dataset.value = value;
	newNode.classList.add('active', 'scale-up-center');
	currNode.appendChild(newNode);

	count--;

	return addRandomValue(nodeArr, count);
}

export default addRandomValue
