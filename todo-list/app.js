// selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// functions 

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();

    // To do DIV:

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create LI

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Add todo to local storage
    saveLocalTodos(todoInput.value);

    //Checked marked button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>'
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    //Trash button 

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list

    todoList.appendChild(todoDiv);


    // clear to do input value:
    todoInput.value = "";
}


//Creates the delete check 
function deleteCheck(e) { // e means the even listener meaning click on this case
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    //CHECK MARK
    if (item.classList[0] === 'completed-btn') { //THIS IS THE BUTTON 
        const todo = item.parentElement;
        todo.classList.toggle('completed'); // THIS IS THE BUTTON CLASS NEEDED FOR CSS
    }
}


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    //CHECK IF WE HAVE LOCAL STORAGE SAVED
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}