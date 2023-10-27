let form = document.getElementById('booking-form');

// diffrence b/w let and var - let is new and advance whereas var s old less effective.
form.addEventListener('submit', addDetails);

function addDetails(e) {
    e.preventDefault();

    let name = document.getElementById('username').value;

    let email = document.getElementById('email').value;

    let phone = document.getElementById('phone').value;

    //js object creation 
    let mak = {
        uname: name,
        email: email,
        phone: phone,
    };

    localStorage.setItem('myobj', mak);
    //console.log(localStorage); // return [object object] not a proper value 
    //localStorage.getItem('myobj');
    // localStrorage.getItem('myobj').mak; // return undefined

    // SERIALIZATION



    let obj_serialized = JSON.stringify(mak);
    console.log(mak);

    localStorage.setItem('myobj', obj_serialized);
    console.log(localStorage);

    // DESERIALISATION

    let myobj_deserialized = JSON.parse(localStorage.getItem('myobj'));
    console.log(myobj_deserialized);


}