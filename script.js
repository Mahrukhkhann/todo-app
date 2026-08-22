let todoList = [
    // {
    //     item: 'buy milk',
    //     dueDte: '3/2/2026',
    //     completed: false
    // },

    // {
    //     item: 'go to school',
    //     dueDte: '3/2/2026',
    //     completed: false
    // },
     {
        item: 'go to park',
        dueDte: '3/8/2026',
        completed: false
    },
    
];

let savedTodos = localStorage.getItem('todoList');

if (savedTodos) {
    todoList = JSON.parse(savedTodos);
}

displayItems();

function addTodo() {

    let inputElement = document.querySelector('#todoInput');
    let dateElement = document.querySelector('#todoDate');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todoList.push({
        item: todoItem,
        dueDte: todoDate,
        completed: false
        
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
    
}
function toggleComplete(index) {

    todoList[index].completed =
        !todoList[index].completed;

    displayItems();

}
function deleteTodo(index) {

    todoList.splice(index, 1);

    localStorage.setItem(
        'todoList',
        JSON.stringify(todoList)
    );

    displayItems();

}


function displayItems() {

    let containerElements = document.querySelector('.todoContainer');

    let newhtml = '';

    for (let i = 0; i < todoList.length; i++) {

        let item = todoList[i].item;
        let dueDate = todoList[i].dueDte;

        let completed = todoList[i].completed;

        let itemClass = completed ? 'completed' : '';

        // newhtml += `
        //     <span>${item}</span>
        //     <span>${dueDate}</span>
        //     <button class="buttonDelete"
        //         onclick="todoList.splice(${i},1); displayItems();">
        //         Delete
        //     </button>
        // `;
newhtml += `
    <div class="todoItem">

        <span class="${itemClass}">${item}</span>

        <span>${dueDate}</span>

        <button class="buttonComplete"
            onclick="toggleComplete(${i})">
            ${completed ? 'Undo' : 'Complete'}
        </button>

        <button class="buttonDelete"  
            onclick="deleteTodo(${i});">  
            Delete  
        </button>

    </div>
`;
    }

    containerElements.innerHTML = newhtml;
}