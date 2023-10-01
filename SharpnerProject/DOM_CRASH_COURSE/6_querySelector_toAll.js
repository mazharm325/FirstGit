// querySelcetor and querySelectortoAll

// can be select by
//1. class ->  use . operator ex -> ".list-group-item" '.title
//2. tag
//3. id  -> use # operator ex: '#main-header'
//4.or any identifier-> css selector


//querySelector

// 1. using tag
var header = document.querySelector('li');
console.log(header);

// 2. using id  -- it uses # as prefix of id 
var head = document.querySelector('#main-header');
head.style.borderBottem = 'solid 8px #f0f0f0';

// always take first occurance tag which ever it is:
var input = document.querySelector('input');
input.value = 'Type here';

// select particular multiple tag using

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

//3. using class -- in this prefix would be . dot operator

var item = document.querySelector(".list-group-item");
item.style.color = 'red';

//use of pseudo selector

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var nthChild = document.querySelector('.list-group-item:nth-child(2)');
nthChild.style.backgroundColor = 'grey'
console.log(nthChild);

//USE OF querySelectortoALL()//

// gave node lsit similar to colleciton advantages to run array functions on it.

var title = document.querySelectorAll('.title');
console.log(title);

title[0].textContent = 'Hello MAK';

// update all odd child element in the list

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green'
}

var nthItem = document.querySelectorAll('li:nth-child(2)');
//nthItem.style.color = 'green'

var nthChild = document.querySelector('.list-group-item:nth-child(2)');
nthChild.style.color = 'green'