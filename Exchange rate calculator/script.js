const currencyEl_one = document.querySelector('#currency-one');
const currencyEl_two = document.querySelector('#currency-two');
const amountEl_one = document.querySelector('#amount-one');
const amountEl_two = document.querySelector('#amount-two');
const swap = document.querySelector('#swap');
const rateEl = document.querySelector('#rate');


// Fetch exchange rate 
function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://open.exchangerate-api.com/v6/latest`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency_two] / data.rates[currency_one]
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    })
}

// Event listerner

currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp
    calculate();
})

