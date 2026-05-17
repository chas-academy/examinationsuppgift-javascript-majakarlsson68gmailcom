const inputDesc = document.getElementById("desc");
const inputAmount = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balance = document.getElementById("balance");

const incomeArray = [];
const expenseArray = [];
 let saldo = 0;

expenseBtn.addEventListener("click", () => {
    getExpense();
    countSaldo();
    inputAmount.value = "";
    inputDesc.value = "";
})


incomeBtn.addEventListener("click", () => {
    let belopp = inputAmount.value;
    getIncome();
    countSaldo();
    inputAmount.value = "";
    inputDesc.value = "";
})





function getIncome (){
    let belopp = Number(inputAmount.value);
    let beskrivning = inputDesc.value;
    
    if (inputDesc.value === "" || inputAmount.value === "" ) return;
    if (isNaN(inputAmount.value)) return; 
    else {
        incomeArray.push({amount: belopp, type: beskrivning})
     } 

     incomeList.textContent = "";

     for (let income of incomeArray){
        let liItem = document.createElement("li");
        liItem.textContent = `${income.type} – ${income.amount} kr`;
        incomeList.appendChild(liItem);
     }

     
}

function getExpense (){
    let belopp = Number(inputAmount.value);
    let beskrivning = inputDesc.value;
   
    if (inputDesc.value === "" || inputAmount.value === "" ) return;
    if (isNaN(inputAmount.value)) return; 
    else {
        expenseArray.push({amount: belopp, type: beskrivning})
     } 

     expenseList.textContent = "";

      for (let expense of expenseArray){
        let liItem = document.createElement("li");
        liItem.textContent = `${expense.type} – ${expense.amount} kr`;
        expenseList.appendChild(liItem);
     }
}

function countSaldo (){
    let saldo = 0;
    for (let income of incomeArray){
        saldo += income.amount;
    }

    for (let expense of expenseArray){
        saldo -= expense.amount;
    }

    balance.textContent = saldo;
}