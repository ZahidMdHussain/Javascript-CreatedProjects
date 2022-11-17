const video = document.querySelector('video')
const play=document.querySelector('#play')
const stop=document.querySelector('#reset')
const progress=document.querySelector('#progress')
const timestamp=document.querySelector('#timestamp')

//Video play pause
function toggleVideoStatus(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}
//Update play pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa-solid fa-play"></i>'
    }else{
        play.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
}
//Update progress 
function updateProgress(){
    progress.value=(video.currentTime / video.duration)*100;
    //timestamp
    let min = Math.floor(video.currentTime / 60);
    if(min<10){
        min = '0'+min.toString();
    }
    let sec = Math.floor(video.currentTime % 60);
    if(sec<10){
        sec = '0'+sec.toString();
    }
    timestamp.innerText = min+':'+sec
}
//Stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause()
}
//change progress for video
function setVideoProgress(){
    video.currentTime = parseInt(progress.value * video.duration)/100
}

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo)
progress.addEventListener('change',setVideoProgress)
