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

    localStorage.setItem(email, JSON.stringify(myobj));

    let parentElement_UL = document.getElementById('ulist');

    let newElement_li = document.createElement('li');

    let delBtn = document.createElement('input');
    delBtn.className = 'delete';
    delBtn.type = 'button';
    delBtn.value = 'delete';

    let editBtn = document.createElement('input');
    editBtn.className = 'edit';
    editBtn.type = 'button';
    editBtn.value = 'Edit';


    newElement_li.appendChild(document.createTextNode(JSON.stringify(myobj)));

    parentElement_UL.appendChild(newElement_li);

    newElement_li.appendChild(delBtn);
    newElement_li.appendChild(editBtn);

    delBtn.onclick = () => {
        localStorage.removeItem(myobj.mail);
        parentElement_UL.removeChild(newElement_li);
    };

    editBtn.onclick = () => {
        localStorage.removeItem(myobj.mail);
        parentElement_UL.removeChild(newElement_li);
        document.getElementById('username').value = myobj.name;
        document.getElementById('email').value = myobj.mail;
        document.getElementById('phone').value = myobj.number;
    };

    //newElement_li.appendChild(document.createTextNode(`${myobj['name']}--${myobj['mail']}-- ${myobj['number']}`));

    //console.log(newElement_li);



}