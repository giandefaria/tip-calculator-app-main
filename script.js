const bill = document.getElementById('bill');
const tipAmountOutput = document.getElementById('tipAmount');
const tipValue = document.querySelectorAll('.tip-box__tip__value');
const inputValue = document.getElementById('custom');
const numberPeople = document.getElementById('number-of-people');
const tipTotalOutput = document.getElementById('tipTotal');
const activeReset = document.getElementById('reset');
const buttonActive = document.querySelectorAll('.design-button');


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
const numberOfPeopleStyle = document.getElementById("number-of-people")

function verifyNumberPeople () {

    if (numberPeople.value == 0 || numberPeople.value == "") {
        numberOfPeopleStyle.classList.remove("number-of-people");
        numberOfPeopleStyle.classList.add("number-of-people--active");
        errorMessage.innerText = "Can't be zero";
            
    } else {
        numberOfPeopleStyle.classList.remove("number-of-people--active");
        numberOfPeopleStyle.classList.add("number-of-people");
        errorMessage.innerText = "";
    }
}

setInterval(verifyNumberPeople, 100);

 
function resetOn () { 
    if (bill.value > 0 || numberPeople.value > 0 || tipValue.value > 0 || tipAmountOutput.value != "$0.00" || tipTotalOutput.value != "$0.00") {
        activeReset.classList.remove("background");
        activeReset.classList.add("background--active");
    } else {
        activeReset.classList.remove("background--active");
        activeReset.classList.add("background");
    }
}

setInterval(resetOn, 100);

function resetButtonsDesign () {
    let index = 0
        while (index < buttonActive.length) {
            buttonActive[index].classList.remove("design-button--active");
            buttonActive[index].classList.add("design-button");
            index++
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
    resetButtonsDesign();

}

for (let i = 0; i < buttonActive.length; i++) {
    
   
    buttonActive[i].addEventListener('click', () => {

        resetButtonsDesign();
        buttonActive[i].classList.toggle('design-button--active')
   

     } )

}

