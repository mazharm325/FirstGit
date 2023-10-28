let form = document.getElementById('booking-form');

form.addEventListener('submit', addDetails);

function addDetails(e) {
    e.preventDefault();
    let uname = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('phone').value;

    let myobj = {
        name: uname,
        mail: email,
        number: contact,

    };

    let obj_serialized = JSON.stringify(myobj);
    console.log(obj_serialized);

    localStorage.setItem('myobj', obj_serialized);
    //localStorage.setItem('myobj', myobj) /// without stringify
    // console.log(myobj);

    let users = document.getElementById('ulist');

    let li = document.createElement('li');
    console.log(li);
    // li.appendChild(document.createTextNode(obj_serialized['name']));
    // use of backtick - string interpolation -templet literal in javascript
    li.appendChild(document.createTextNode(`name - ${myobj['name']}----email - ${myobj['mail']}-------number - ${myobj['number']}`));
    console.log(li);
    users.appendChild(li);

}