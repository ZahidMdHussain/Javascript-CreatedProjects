
const openBtn = document.querySelector('.open-btn');
const myContainer = document.querySelector('.modal-container')
const closeBtn = document.querySelector('#close-btn')

openBtn.addEventListener('click',() =>{
    myContainer.style.display = "block";
})

closeBtn.addEventListener('click',() => {
    myContainer.style.display = "none";
})

window.addEventListener('click',(e) =>{
    if(e.target === myContainer){
        myContainer.style.display = "none";
    }
})
