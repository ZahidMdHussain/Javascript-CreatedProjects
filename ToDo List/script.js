const inputText = document.querySelector('#input-task')
const addBtn =document.querySelector('#add-task')
const addedTask = document.querySelector('#task-container')


addBtn.addEventListener('click',() =>{

    let task = document.createElement('div')
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = `${inputText.value}`;
    task.appendChild(li);

    let check = document.createElement('button');
    check.innerHTML = `<i class="fa-solid fa-check"></i>`
    check.classList.add('checked');
    task.appendChild(check);

    let deleteTask = document.createElement('button');
    deleteTask.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteTask.classList.add('deleted')
    task.appendChild(deleteTask);

    if(inputText.value === ""){
        alert('Please enter values')
    }else{
        addedTask.style.display = 'block';
        addedTask.appendChild(task);
    }
    inputText.value =""

    check.addEventListener('click',() => {
        check.parentElement.style.textDecoration = 'line-through';
    })
    deleteTask.addEventListener('click', (e) => {
        // let target =e.target
        deleteTask.parentElement.remove();
        if(addedTask.childElementCount === 0){
            addedTask.style.display = 'none';
        }
    })

   

})
