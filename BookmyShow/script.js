const container = document.querySelector('.container')
const seat = document.querySelectorAll('.rows .seat:not(.occupied)')
const count = document.querySelector('.text #count')
const total = document.querySelector('.text #total')
const movie = document.querySelector('#movie')
let ticketPrice = parseInt(movie.value);


//update ticket count
function updateSelectedCount(){
    const selectedSeat = document.querySelectorAll('.rows .seat.selected')
    const selectedSeatCount = selectedSeat.length;
    count.innerText = selectedSeatCount
    total.innerText = ticketPrice*selectedSeatCount
}

//Movie select event
movie.addEventListener('change',(e)=>{
    ticketPrice = parseInt(e.target.value)
    updateSelectedCount()
})

//Seat select event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelectedCount();

    }
})