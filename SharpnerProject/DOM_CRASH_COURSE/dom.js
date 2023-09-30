// Examine the documnet object//
//console.dir(document);
console.log(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// we can set title  through script also
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//selecting thing
// doing this is not good practice html file keep change so it index value also change.
// what if some one add <span> 1 </span> at line number 10.
//document.all[10].textContent = 'hello_change'
console.log(document.forms);
// no links so ouput of [] empty array -- vis collecitons
console.log(document.links); //oupt put ishtml colleciton-- can also say array

console.log(document.images);

// selector

//get element by id
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.TextContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
// diffference between innerText and TextContent 
// if we change in headertitle in index.htm 
// after header add span in header title header title adn span  123
// refer index.htm
console.log(headerTitle.TextContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3> hello</h3>';
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
//GET ELEMENETSBY CLASS NAME //
var items = document.getElementsByClassName('list-group');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'green';
items[1].style.color = 'red';

var title = document.getElementsByClassName('title');
console.log(title);
console.log(title[1]);
//error
//items.style.backgroundColor = '#f4f4f4'; //grey
// want to change all items list abckground colorin onnce
// not work because
// items is a collection of array so do that
// need a loop

var title1 = document.getElementsByClassName('title1');
console.log(title1);
console.log(title1[1]);


for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4'
}

var listitems = document.getElementById('items');
console.log(listitems);
//console.log(listitems[2])