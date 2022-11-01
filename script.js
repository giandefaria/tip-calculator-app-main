const bill = document.getElementById('bill');
const tipAmountOutput = document.getElementById('tipAmount');
const tipValue = document.querySelectorAll('.tip-box__tip__value');
const inputValue = document.getElementById('custom');

bill.addEventListener('keyup', () => {
    tipAmountOutput.value = ('$' + bill.value);
})

for (let i = 0; i < tipValue.length; i++) {
    const value = tipValue[i].value;

    tipValue[i].addEventListener('click', () => {
        tipAmountOutput.value = ('$' + tipValue[i].value);
    })
}


function outputValue() {
    tipAmountOutput.value = inputValue.value;
}