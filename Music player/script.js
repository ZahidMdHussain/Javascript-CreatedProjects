const musicContainer = document.querySelector('#music-container')
const play = document.querySelector('#play');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const audio = document.querySelector('#audio');
const progress = document.querySelector('#progress')
const progressContainer = document.querySelector('#progress-container')
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Available songs list
songs =['Legends Never Die','Playground','Enemy','Warriors']
songIndex = 1;

function loadSongs(song){
    title.innerHTML= song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// load song details into DOM
loadSongs(songs[songIndex]);

//play song
function playSong(){
    musicContainer.classList.add('play');
    play.innerHTML =`<i class="fa-solid fa-pause"></i>`
    audio.play();
}

// pause song
function pauseSong(){
    musicContainer.classList.remove('play');
    play.innerHTML =`<i class="fa-solid fa-play"></i>`
    audio.pause();
}

// previous song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex=songs.length-1;
    }
    loadSongs(songs[songIndex]);
    playSong();
}

//next song
function nextSong(){
    songIndex++;
    if(songIndex === songs.length){
        songIndex=0;
    }
    loadSongs(songs[songIndex]);
    playSong();
}

//update progress bar
function progressUpdate(e){
    const {duration, currentTime} =  e.srcElement;
    const musicPercent = (currentTime/duration) * 100;
    progress.style.width = `${musicPercent}%`;
}

//seek progress bar
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

//function play music
function playMusic(){
    if(musicContainer.classList.contains('play')){
        pauseSong();
    }else{
        playSong();
    }
}

// Event listerner
play.addEventListener('click', playMusic);
prev.addEventListener('click',prevSong);
next.addEventListener('click',nextSong);
audio.addEventListener('timeupdate',progressUpdate);
progressContainer.addEventListener('click',setProgress);
audio.addEventListener('ended', nextSong);