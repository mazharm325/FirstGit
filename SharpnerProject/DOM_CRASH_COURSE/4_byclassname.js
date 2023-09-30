// return collection of array
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
console.log(items[3]);
//0- based index
//items[1].style.color = 'red';
// change back ground color for 3rd itme list
items[2].style.backgroundColor = 'green'
    // change all list items in bld font
    //error - 
    //items.style.fontWeight = 'bold'

// to update all list
// need loop-collections - inform of array
for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold'
}