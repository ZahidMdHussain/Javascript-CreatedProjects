const balance = document.querySelector('#balance'),
money_plus= document.querySelector('#money-plus'),
money_minus= document.querySelector('#money-minus'),
list= document.querySelector('#list'),
text= document.querySelector('#text'),
amount= document.querySelector('#amount'),
form= document.querySelector('#form');

// const dummyTransaction = [
//     { id: 1, text: 'Flower', amount: -20 },
//     { id: 2, text: 'Salary', amount: 300 },
//     { id: 3, text: 'Book', amount: -10 },
//     { id: 4, text: 'Camera', amount: 150 }
// ];

const localStorageTransaction = JSON.parse(localStorage.getItem('transaction'));

let transaction = localStorage.getItem('transaction') !== null ? localStorageTransaction : [];

// function Add new Transaction into DOM
function addNewTransaction(e){
    e.preventDefault()
    const myText = (text.value).trim();
    const myAmount = parseInt(amount.value)
    if(myText === '' || myAmount === ''){
        alert('Either Text or Amount is empty...');
    }
    else{
        const newTransaction = {
            id: randomId(),
            text:myText,
            amount:myAmount
        }
    transaction.push(newTransaction);
    addTransaction(newTransaction);
    updateValues();
    updateLocalStorage();

    text.value=""
    amount.value=""
    }
}

//Generate Random id
function randomId(){
    return Math.floor(Math.random()* 100000);
}

// Add transaction to DOM list
function addTransaction(transaction){
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML =   `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button 
    class="delete-btn" onclick="removetransaction(${transaction.id})">x</button>`

    list.appendChild(item);
}

// Function to remove transaction from DOM
function removetransaction(myID){
    transaction = transaction.filter(trans => trans.id !== myID)
    updateLocalStorage();
    init()
}

// Update balance
function updateValues(){
    const amounts = transaction.map(transaction => transaction.amount);
    const totalAmount = amounts.reduce((acc,item) =>{
         return acc+=item;
    },0 ).toFixed(2);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => {
        return acc+=item;
    },0).toFixed(2);

    const expense = (amounts.filter(item => item < 0).reduce((acc,item) => {
        return acc+=item
    },0)*-1 ).toFixed(2);

    balance.innerText=`$${totalAmount}`;
    money_plus.innerText=`+$${income}`;
    money_minus.innerText=`-$${expense}`
}

//Update local Storage
function updateLocalStorage(){
    localStorage.setItem('transaction',JSON.stringify(transaction))
}

function init(){
    list.innerHTML = '';
    transaction.forEach(addTransaction);
    updateValues();
}


form.addEventListener('submit',addNewTransaction);
init();