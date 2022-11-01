const bill = document.getElementById('bill');
const tipAmountOutput = document.getElementById('tipAmount');
const tipValue = document.querySelectorAll('.tip-box__tip__value');
const inputValue = document.getElementById('custom');
const numberPeople = document.getElementById('number-of-people');
const tipTotalOutput = document.getElementById('tipTotal');

bill.addEventListener('keyup', () => {
    tipAmountOutput.value = ('$' + bill.value);
})

for (let i = 0; i < tipValue.length; i++) {
    const value = tipValue[i].value;

    tipValue[i].addEventListener('click', () => {
        tipAmountOutput.value = ('$' + (bill.value * tipValue[i].value / numberPeople.value).toFixed(2));
        tipTotalOutput.value = ('$' + ((bill.value / numberPeople.value) + Number(tipAmountOutput.value.slice(1,6))).toFixed(2));
    })
}


function outputValue() {
    tipAmountOutput.value = inputValue.value;
}