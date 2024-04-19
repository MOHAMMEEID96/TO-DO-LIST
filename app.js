const addform = document.querySelector('.add')
const addtodo = document.querySelector('.todos')
const searchtodo = document.querySelector('.search input')


const generatetodo = todo=>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span> 
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    addtodo.innerHTML += html
}
addform.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addform.add.value.trim()
    if(todo.length){
    generatetodo(todo)
    addform.reset();
    }
})

addtodo.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filtertodo = (term)=>{
    Array.from(addtodo.children)
    .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
    .forEach ((todo)=>todo.classList.add('filtered'))

    Array.from(addtodo.children)
    .filter((todo)=>todo.textContent.toLowerCase().includes(term))
    .forEach ((todo)=>todo.classList.remove('filtered'))

}

searchtodo.addEventListener('keyup',()=>{
    const term = searchtodo.value.trim().toLowerCase();
    filtertodo(term)

})