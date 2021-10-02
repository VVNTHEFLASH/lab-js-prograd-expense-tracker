//Define income and expense as 0
var income = 0;
var expense = 0;
//get the list id
var TList = document.getElementById('list');
//get the button by class name
var button = document.getElementsByClassName('btn')[0];
//create event listener for store the values
button.addEventListener('click', function() {
    //get text and amount
    var text = document.getElementById("text").value;
    var amount = document.getElementById("amount").value;
    //set localstorage text and amount
    window.localStorage.setItem(text, amount);
});

window.onload = () => {
    //loop through localstorage
    for(let i=0;i<localStorage.length;i++) {
        //create list element
        var list = document.createElement('li');
        //get amount from local storage
        var $amount = localStorage.getItem(localStorage.key(i));
        //get text from localstorage
        var $text = localStorage.key(i);
        //check if amount is greater than 0
        //then return income
        if($amount > 0) {
            income += parseInt($amount);
            list.classList.add('plus');
            list.textContent = $text +' '+ $amount;
        }
        //check if amount is less than 0
        //then return expense
        else if($amount < 0) {
            expense -= parseInt($amount);
            list.classList.add('minus');
            list.textContent = $text + ' ' + $amount;
        }
        //append the list in id list
        TList.appendChild(list);
        
    document.getElementById('money-plus').textContent = '$'+income;
    document.getElementById('money-minus').textContent = '$'+expense;
    document.getElementById('balance').textContent = '$' + (income - expense);
    }

}

