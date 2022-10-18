/**
 * Add 2 random cells at the start
 * @param {HTMLAllCollection} nodeList
 * @param {Int} count
 * @returns {Self}
 */
const VALUES = ['2', '4'];

const addRandomValue = (nodesArr,count) =>{

  if (count <= 0) return;
  let availableNodes = [];

  //Get only available cells
  nodesArr.forEach(node => {
    if(!node.hasChildNodes()) availableNodes.push(node)
  });

  if(!availableNodes.length) return false
  //get a random node
  const rand = Math.floor(Math.random() * (availableNodes.length - 1));
  const currNode = availableNodes[rand];
  //And append it a new value
  const newNode = document.createElement('div');
  //TODO: wip 2048 tuiles
  const randomValue = VALUES[Math.floor(Math.random() * VALUES.length)];
  // const randomValue = 2048;
	newNode.innerText = randomValue;
	newNode.dataset.value = randomValue;
	newNode.classList.add('active', 'scale-up-center');
	currNode.appendChild(newNode);

  count--;

  return addRandomValue(nodesArr, count)
}

export default addRandomValue
