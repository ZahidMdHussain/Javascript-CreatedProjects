const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];

// Intially on load get 3 user. 
getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user from api
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json()
    const user = data.results[0];
    const newUser = {
        name : `${user.name.first} ${user.name.last}`,
        money : Math.floor(Math.random() * 1000000)
    };
    addData(newUser);
}

// function to double money
function doubleMoney(){
    data = data.map((user) => {
    return {...user, money : user.money *2}
    });
    updateDOM();
}

// function to sort by richest
function sortUser(){
    data.sort((a,b) => {
       return b.money - a.money
    });

    updateDOM();
}

// function to filter only millionaires

function filterMillionair (){
    data = data.filter((user) => {
        return user.money > 1000000;
    });

    updateDOM();
}

//function  to calculate all wealth
function calculateWealth(){
    const wealth = data.reduce((total, num) => {
        return total+=num.money;
    }, 0);

    const wealthEl = document.createElement('div');
    wealthEl.classList.add('total-wealth');
    wealthEl.innerHTML=`<h3>Total Wealth <strong>${formatMoney(wealth)}</strong></h3>`
    main.appendChild(wealthEl);
}

// Add new obj to data array
function addData(obj){
    data.push(obj);

    updateDOM();
}

function updateDOM(providedData = data){
    // clear main div
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`
    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML =`<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element)
    })

}

// function to format number to money (in $)
function formatMoney(number){
    return '$'+ number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


// adding event listerner to DOM elements
addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortUser);
showMillionairesBtn.addEventListener('click',filterMillionair);
calculateWealthBtn.addEventListener('click',calculateWealth);