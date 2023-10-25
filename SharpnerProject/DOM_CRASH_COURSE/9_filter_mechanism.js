// to add new item in list
var form = document.getElementById('addForm');

// to remove item from list
var itemList = document.getElementById('items');


// to search item in list
var filter = document.getElementById('filter');

// to edit item in list
var editList = document.getElementById('items');


// form submit event

form.addEventListener('submit', addItem);

// delete event
// list item remove

itemList.addEventListener('click', removeItem);

// filter event

filter.addEventListener('keyup', filterItem);

// edit button event
editList.addEventListener('click', editItem);

// funcitons definations use in events

// add item for form

function addItem(e) {
    e.preventDefault();
    // console.log(1);

    // get input value

    var newItem = document.getElementById('item').value;
    //console.log(newItem);


    // create new li element

    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';

    //console.log(li);

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));


    //*************  adding delete button functionality and btn in text node  */

    var delBtn = document.createElement('button');
    // add class to delBtn
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append to textNode
    delBtn.appendChild(document.createTextNode('X'));
    // append delBtn to li
    li.appendChild(delBtn);

    // ************ edit button add****//

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);

    // appending create input value as child
    // or say append li to list

    itemList.appendChild(li);
}

// function to remove item

function removeItem(e) {
    //console.log(e);
    //console.log('remove function..');
    if (e.target.classList.contains('delete')) {
        //console.log('1 st if check');
        if (confirm('are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



//filter function

function filterItem(e) {
    // convert everything input in lowercase 
    var text = e.target.value.toLowerCase();
    //console.log(text);
    // get list of items

    var items = itemList.getElementsByTagName('li');
    //console.log(items);
    // becaues this give HTMLCOllection list
    // convert it into array

    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        //console.log(itemName);

        // compare with search text

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'black';

        } else {
            item.style.display = 'none';

        }
    });


}


// edit item list
function editItem(e) {
    console.log("edit funciton", e);
    if (e.target.classList.contains('edit')) {
        if (confirm('are you sure: '));
        var li = e.tareget.parentElement;
        editItem.editItem(li);
    }
}

// // variablie to hold operation

// //to add item into list here spl use click event on submit.
// var form = document.getElementById('addForm');
// //console.log(form);
// // to add item into given list // appear or show or visible
// var itemList = document.getElementById('items');



// //form event listener control
// // addEventListner function take 2 args one is event second as funciton it will declare below
// form.addEventListener('submit', addForm);

// // delete funciton



// // funciton declarations

// // to add items into list using form submit event
// function addForm(e) {
//     e.preventDefault();
//     //console.log('add event fun..');
//     // get input forn text node

//     var newItem = document.getElementById('item').value;
//     //console.log(newItem);

//     // to add description into 

//     var desc = document.getElementById('description').value;


//     var li = document.createElement('li');
//     //console.log(li); /// li tag created
//     //add class
//     li.className = 'list-group-item';

//     //  add text node with input value
//     li.appendChild(document.createTextNode(newItem));
//     //console.log(li);

//     // adding delete button
//     var delBtn = document.createElement('button');
//     // adding edit button
//     var editBtn = document.createElement('button');

//     // add class to delete button
//     delBtn.className = 'btn btn-danger btn-sm float-right delete';
//     editBtn.className = 'btn btn-secondary btn-sm float-right edit';
//     //append text node
//     delBtn.appendChild(document.createTextNode('X'));
//     editBtn.appendChild(document.createTextNode('edit'));

//     // append delete button to li

//     li.appendChild(delBtn);
//     li.appendChild(editBtn);


//     // to add item into list as li child  // alway do./write in last line or no more item to add/eedit /delete


//     itemList.appendChild(li);
//     /// console.log(li);




// }