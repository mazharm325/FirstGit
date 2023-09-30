// DOM MANUPLATIOMby TAG NAME// return collection of array
var li = document.getElementsByTagName('li');
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
console.log(li[3]);
//0- based index
//items[1].style.color = 'red';
// change back ground color for 3rd itme list
li[2].style.backgroundColor = 'green'
    // change all list items in bld font
    //error - 
    //items.style.fontWeight = 'bold'

// to update all list
// need loop-collections - inform of array
for (var i = 0; i < li.length; i++) {
    li[i].style.fontWeight = 'bold'
}