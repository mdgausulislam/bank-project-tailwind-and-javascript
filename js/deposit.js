
// step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('deposit button click');
// step-02 get the deposit amount from the deposit amount
// for input field use.value to the value inside the input field
    const depositField=document.getElementById('deposit-field');
    const depositAmount=depositField.value;
    // console.log(deposit);

    // step-03 get the current deposit total amount
    // for non input (elements other than input,textarea),use innerText to get the text

    const depositTotalElements=document.getElementById('deposit-total');
    const depositTotal=depositTotalElements.innerText;
    // console.log(depositTotal);
    depositTotalElements.innerText=depositAmount;
})