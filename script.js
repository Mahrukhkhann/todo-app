let todoList = [
    {
        item: 'buy milk',
        dueDte: '3/2/2026'
    },

    {
        item: 'go to school',
        dueDte: '3/2/2026'
    },
     {
        item: 'go to park',
        dueDte: '3/8/2026'
    // },
    // {
    //     item: 'go to park',
    //     dueDte: '3/8/2026'
    // }
];

displayItems();

function addTodo() {

    let inputElement = document.querySelector('#todoInput');
    let dateElement = document.querySelector('#todoDate');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todoList.push({
        item: todoItem,
        dueDte: todoDate
    });

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}


function displayItems() {

    let containerElements = document.querySelector('.todoContainer');

    let newhtml = '';

    for (let i = 0; i < todoList.length; i++) {

        let item = todoList[i].item;
        let dueDate = todoList[i].dueDte;

        newhtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="buttonDelete"
                onclick="todoList.splice(${i},1); displayItems();">
                Delete
            </button>
        `;
    }

    containerElements.innerHTML = newhtml;
}