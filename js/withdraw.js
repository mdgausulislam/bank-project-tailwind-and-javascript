// 1.add event handler with the withdraw button
// 2.get the withdraw amount from the input field
// 2.5 also make sure to convert the input  into a number by using   parseFloat
// 3.get previous withdraw total 
//4 calculate total elements and set total  withdraw amount
//5. get the previous balance total
//6.calculate new balance total
//6.5 set the new balance
//7. clear the input field


// step-01

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log("withdraw please");

    // step-02
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;

    const newWithdrawField = parseFloat(newWithdrawFieldString);

    // step3
    const totalWithdrawElements = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = totalWithdrawElements.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    // step-04

    const currentTotalWithdraw = newWithdrawField + previousWithdrawTotal;
    totalWithdrawElements.innerText = currentTotalWithdraw;


    // step-05

    const balanceTotalElements = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElements.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6

    const currentBalanceTotal = previousBalanceTotal - newWithdrawField;
    //set the balance total
    balanceTotalElements.innerText = currentBalanceTotal;


    // step-7

    withdrawField.value = ' ';
})
