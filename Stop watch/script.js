const myTime = document.querySelector('.timer');
const play = document.querySelector('#play');
const reset =document.querySelector('#stop');
const pause =document.querySelector('#play i');


let seconds = 0;
let minutes = 0;
let hours= 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval =null;
let timerStatus = 'stopped'

function stopWatch(){
    seconds++
    if(seconds / 60 ===1){
        seconds = 0;
        minutes++
        if(minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10){
        leadingSeconds = '0'+seconds.toString();
    }else{
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = '0'+minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours = '0'+hours.toString();
    }else{
        leadingHours = hours;
    }

    myTime.innerText = leadingHours+':'+leadingMinutes+':'+leadingSeconds;
}


play.addEventListener('click',() => {
    if(timerStatus === 'stopped'){
        timerInterval=window.setInterval(stopWatch,1000);
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`
        timerStatus = 'running'
    }else{
        window.clearInterval(timerInterval);
        play.innerHTML = `<i class="fa-solid fa-play"></i>`
        timerStatus = 'stopped'
    }
})

reset.addEventListener('click',() => {
    window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  myTime.innerText = `00:00:00`;

  // change pause btn to play btn
  play.innerHTML = `<i class="fa-solid fa-play"></i>`;
  timerStatus = "stopped";
})

