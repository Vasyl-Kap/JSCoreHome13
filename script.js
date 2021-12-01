let form = document.forms.myForm;
let getID = id => document.getElementById(id);
let getS = selector => document.querySelector(selector);

let nameRegExp = /^[a-zA-Z]{2,20}$/;

function validNames() {
    let testName = nameRegExp.test(getID('firstName').value);
    if (testName) {
        getID('firstName').style.border = '2px solid green';
    }
    else {
        getID('firstName').style.border = '2px solid red';
    }
}

function validSurname() {
    let testSurname = nameRegExp.test(getID('lastName').value);
    if (testSurname) {
        getID('lastName').style.border = '2px solid green';
    }
    else {
        getID('lastName').style.border = '2px solid red';
    }
}

let mailRegExp = /^[a-zA-Z0-9.-]*@[a-zA-Z]*\.[a-zA-Z]*$/;

function validEmail() {
    let testEmail = mailRegExp.test(getID('email').value);
    if (testEmail) {
        getID('email').style.border = '2px solid green';
    }
    else {
        getID('email').style.border = '2px solid red';
    }
}

let passRegExp = /^\w{8,15}$/;

function validPass() {
    let passEmail = passRegExp.test(getID('password').value);
    if (passEmail) {
        getID('password').style.border = '2px solid green';
    }
    else {
        getID('password').style.border = '2px solid red';
    }
}

function agreeBtn() {
    if (form.agree.checked && nameRegExp.test(getID('firstName').value) && nameRegExp.test(getID('lastName').value) && mailRegExp.test(getID('email').value) && passRegExp.test(getID('password').value)) {
        form.sign.disabled = false;
    }
    else {
        form.sign.disabled = true;
    }
}

function submitBtn() {
    getS('.modal').classList.add('modal-active');
}

function closeBtn() {
    getS('.modal').classList.remove('modal-active');
    getID('firstName').value = '';
    getID('firstName').style.border = '1px solid lightgray';
    getID('lastName').value = '';
    getID('lastName').style.border = '1px solid lightgray';
    getID('email').value = '';
    getID('email').style.border = '1px solid lightgray';
    getID('password').value = '';
    getID('password').style.border = '1px solid lightgray';
    form.agree.checked = false;
    form.sign.disabled = true;
}