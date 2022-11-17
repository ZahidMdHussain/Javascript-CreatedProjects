const togglebtn = document.querySelector('#toggle');
const close = document.querySelector('#close');
const signUp = document.querySelector('#open');
const myModal = document.querySelector('.modal-container')
const myNav = document.querySelector('nav')

// navbar open close
togglebtn.addEventListener('click',() =>{
   document.body.classList.toggle('show-nav')
})

// modal open event
signUp.addEventListener('click',()=>{
    myModal.classList.add('show-modal')
})

// modal close on clicking close btn
close.addEventListener('click', ()=>{
    myModal.classList.remove('show-modal')
})

// modal close on clicking anywhere on window area
window.addEventListener('click', (e)=>{
    if(e.target === myModal)
    myModal.classList.remove('show-modal')
})
