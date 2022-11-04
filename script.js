const bill = document.getElementById('bill');
const tipAmountOutput = document.getElementById('tipAmount');
const tipValue = document.querySelectorAll('.tip-box__tip__value');
const inputValue = document.getElementById('custom');
const numberPeople = document.getElementById('number-of-people');
const tipTotalOutput = document.getElementById('tipTotal');

bill.addEventListener('keyup', () => {
    tipAmountOutput.value = ('$' + bill.value);
})

var test;
for (let i = 0; i < tipValue.length; i++) {


  tipValue[i].addEventListener('click', () => {
        tipAmountOutput.value = ('$' + (bill.value * (tipValue[i].value / 100) / numberPeople.value).toFixed(2));
        tipTotalOutput.value = ('$' + ((bill.value / numberPeople.value) + Number(tipAmountOutput.value.slice(1,6))).toFixed(2));
        test = i;
    })
    tipValue[i].addEventListener('keyup', () => {
        tipAmountOutput.value = ('$' + (bill.value * (tipValue[i].value / 100) / numberPeople.value).toFixed(2));
        tipTotalOutput.value = ('$' + ((bill.value / numberPeople.value) + Number(tipAmountOutput.value.slice(1,6))).toFixed(2));
        test = i;
        
    })
    numberPeople.addEventListener('keyup', () => {
        tipAmountOutput.value = ('$' + (bill.value * (tipValue[test].value / 100) / numberPeople.value).toFixed(2));
        tipTotalOutput.value = ('$' + ((bill.value / numberPeople.value) + Number(tipAmountOutput.value.slice(1,6))).toFixed(2));
        
        
    })
   
}

const errorMessage = document.getElementById('error1');

function verifyNumberPeople () {

    if (numberPeople.value == 0 || numberPeople.value == "") {

        errorMessage.innerText = "teste";
            
    } else {
        errorMessage.innerText = "";
    }
}
 
    
function reset () {

    let resetNumber = document.querySelectorAll('.reset');
    let i = 0;
    while (i < resetNumber.length) {

        resetNumber[i].value = "";
        i++;        
    }
    tipAmountOutput.value = "$0.00"
    tipTotalOutput.value = "$0.00";

}