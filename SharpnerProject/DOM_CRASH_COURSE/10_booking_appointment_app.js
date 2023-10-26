// localStorage.setItem('name', 'mak'); // key ,value
// localStorage.getItem('name');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// sessionStorage.setItem('fname', 'jhon');
// console.log(sessionStorage.getItem('fname'));
let form = document.getElementById('booking-form');
form.addEventListener('submit', addDetails);

function addDetails(e) {
    e.preventDefault();

    let uname = document.getElementById('username').value;

    let email = document.getElementById('email').value;

    let phone = document.getElementById('phone').value;
    localStorage.setItem('name', uname);
    localStorage.setItem('email', email);
    localStorage.setItem('ph', phone);



}