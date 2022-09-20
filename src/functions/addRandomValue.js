/**
 * Add the value 2 to two random boxes at the beginning
 * @param {*} nodeList
 * @param {*} nbr
 * @returns recursive function
 */

const addRandomValue = (nodesArr,count) =>{

  if (count <= 0) return;
  let availableNodes = [];

  //Get only available cells
  nodesArr.forEach(node => {
    if(!node.hasChildNodes()) availableNodes.push(node)
  });

  //get a random node
  const rand = Math.floor(Math.random() * (availableNodes.length - 1));
  const currNode = availableNodes[rand];
  //And append it a new value
  const newNode = document.createElement('div');
	newNode.innerText = '2';
	newNode.dataset.value = '2';
	newNode.classList.add('active', 'scale-up-center');
	currNode.appendChild(newNode);

  count--;

  return addRandomValue(nodesArr, count)
}

export default addRandomValue
