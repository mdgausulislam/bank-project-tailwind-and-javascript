
// step 1: add click event handler with  the submit button



document.getElementById('btn-submit').addEventListener('click',function() {
    console.log('i clicked this button');
    // step-02 get the email address inside the email input field
    // always remember to use value to get text form an input field
    const userEmail=document.getElementById('user-email');
    const email=userEmail.value;
    console.log(email);

// step-3:get the password
// 3.a :set id html elements
// 3.b : get the elements
// 3.c: get the value from the elements

const passwordField=document.getElementById('user-password');
const password=passwordField.value;
console.log(password);


//Danger: do not verify email password on the client side

//step-04 verify email and password and check wether valid user or invalid user

if(email=='gausulislam5@gmail.com' && password=='secret'){
    console.log('valid-user');
}else{
    console.log('not valid user');
}

})