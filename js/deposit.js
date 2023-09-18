
// step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('deposit button click');
// step-02 get the deposit amount from the deposit amount
// for input field use.value to the value inside the input field
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    // console.log(deposit);

    // step-03 get the current deposit total amount
    // for non input (elements other than input,textarea),use innerText to get the text

    const depositTotalElements=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElements.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);


    // step-04 add numbers to set the total deposit

    const currentDeposit=previousDepositTotal+newDepositAmount;
    //set the deposit total
    depositTotalElements.innerText=currentDeposit;

    // step-05  get balance current total
const balanceTotalElements=document.getElementById('balance-total');
const previousBalanceTotalString= balanceTotalElements.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

// step-06  calculate current total balance

const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
//set the balance total
balanceTotalElements.innerText=currentBalanceTotal;





    // step-7 clear the deposit field

    depositField.value=' ';
})