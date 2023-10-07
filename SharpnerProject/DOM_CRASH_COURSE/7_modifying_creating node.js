// adding parent node property

var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f124';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// use of parentElement--- it can be use as interchangablyby parentNode
console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);
itemList.parentElement.style.backgroundColor = '#b52';


// use of childNode return nodeList 

console.log(itemList.childNodes);
//node repesentwhitle space like line break
// i.e. it include whilte space , if we use line breack it give first list 

// if write all tag in one line thean no 'text' nodecomes only showdirect tag name.

//suggest not to use

// use children

// use of children property  return HTML COllection
//no tlook line break only gave list/ tag item 

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// firstChild property
// gave 'text' node - include white space,
// if we use line break give first list 
// use less recommond firstElementChild

console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello mak!';

// lastChild property

console.log(itemList.lastChild);
//itemList.lastChild.style.color = 'red';

//lastElementChild
console.log(itemList.lastElementChild);

//sibling next sibling, nextElementSibling and previousSibling properties

console.log(itemList.nextSibling); // return text node count white space

// recommned not use nestSibling
//instead use nextElementSibling
// it return null if no sibling tag present.

console.log(itemList.nextElementSibling);
// previous sibling return test node - white space
console.log(itemList.previousSibling);
// previousElementSibling  // return node list tag

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

///**** CREATING DOM ELEMENT  *****
// create element//create div
var newDiv = document.createElement('div');
console.log(newDiv);
//add class

newDiv.className = 'olla';
console.log(newDiv);


// add id 
newDiv.id = 'olla1';
console.log(newDiv);

/// add attribute - title

newDiv.setAttribute("title", "helloDiv");
console.log(newDiv);

// create a text node
var newDivText = document.createTextNode("hello new text node");
console.log(newDivText);
// add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

// add container
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);
console.log(container);
console.log(newDiv);
// font size
newDiv.style.fontSize = '30px '