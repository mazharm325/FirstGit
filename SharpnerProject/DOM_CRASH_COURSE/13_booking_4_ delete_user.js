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

    // let obj_serialized = JSON.stringify(myobj);
    //console.log(obj_serialized);

    //localStorage.setItem('myobj', obj_serialized);
    // to make object as unique by email to store every item into local storage.

    localStorage.setItem(email, JSON.stringify(myobj));
    //console.log(localStorage);

    //localStorage.setItem('myobj', myobj) /// without stringify
    // console.log(myobj);

    let users = document.getElementById('ulist');

    let li = document.createElement('li');
    // console.log(li);
    // li.appendChild(document.createTextNode(obj_serialized['name']));

    let delBtn = document.createElement('input');
    delBtn.className = 'delete';
    delBtn.type = 'button';
    delBtn.value = 'delete';

    // use of backtick - string interpolation -templet literal in javascript
    //li.appendChild(document.createTextNode(`name - ${myobj['name']}----email - ${myobj['mail']}-------number - ${myobj['number']}`));
    delBtn.appendChild(document.createTextNode(JSON.stringify(myobj)));
    //console.log(delBtn);
    users.appendChild(li);
    li.appendChild(delBtn);
    delBtn.onclick = () => {
        localStorage.removeItem(myobj.mail);
        users.removeChild(li);
    }

    li.appendChild(document.createTextNode(`${myobj['name']}--${myobj['mail']}-- ${myobj['number']}`));

    //console.log(li);
    //users.appendChild(li);
    console.log(li);
    //console.log(users);


}