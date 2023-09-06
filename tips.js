//declaracion de variables
const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const percentage = document.querySelector('#tipCustom');
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
const borrar = document.querySelector('#btn-reset');

let btns = document.querySelectorAll('.btn-p');

function validate(){
    cuenta = parseInt(bill.value);
    persons = parseInt(people.value);
    //check cuenta value >0
    !cuenta ? document.querySelector('#msg1').classList.remove('alert') : document.querySelector('#msg1').classList.add('alert');

    //check people value >0
    !persons ? document.querySelector('#msg2').classList.remove('alert') : document.querySelector('#msg2').classList.add('alert');

    //check people or cuenta !=0
    if(persons < 1 || isNaN(persons)){
        die(); //error intentionally for break function just start if  persons is >0
        
    }
}


btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let valBtn = parseInt(btn.innerText.slice(0,-1));
        validate();
        calculate(valBtn);
    });
});

function calculate(tip){
    //operations tip amount per person
    
    let percentTip = (cuenta * tip) /100;
    let tipPerPerson = percentTip / persons;
    let tipResult = tipPerPerson.toFixed(2);

    tipPerPerson ? tipAmount.innerText = tipResult : tipAmount.innerText = 0;
    
    //operation total per person
    let totalBuy = (cuenta * tip) / 100;
    let totalPerPerson = (totalBuy + cuenta) / persons;
    let totalResult = totalPerPerson.toFixed(2);
    totalPerPerson ? total.innerText = totalResult : total.innerText = 0;
}

percentage.addEventListener("input", function () {
    validate();
    let percent =parseInt(percentage.value);
    calculate(percent);
  
});

percentage.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        validate();
        let percent =parseInt(percentage.value);
        calculate(percent);
  
    }
});

borrar.addEventListener("click", function (e) {
    clear();
    
});
function clear(){
    bill.value = 0;
    people.value = 0;
    tipAmount.innerText = 0;
    total.innerText = 0;
}
