const username = 'Alice';

// console.log('hello world');
console.log(`hello ${username}`);

// create a new li
const myLi = document.createElement('li');

// create a text node for the li
const textNode = document.createTextNode('Four');

// put the text node and the li together
myLi.append(textNode); // <li>Four</li>

// find something in the DOM that already exists
const mainList = document.getElementById('main-list');

// add the newly created li to the main-list
mainList.append(myLi);
