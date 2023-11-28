const todoForm = document.querySelector('#todo-form');
const textInput = document.querySelector('#new-todo');
const todoList = document.querySelector('#list');
const completedList = document.querySelector('#completed-list');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addItem(textInput.value);
    textInput.value = ''; // Clear the input field
});

const addItem = (input) => {
    if (input.trim() !== '') {
        const newListItem = createListItem(input);
        todoList.appendChild(newListItem);
    }
};

const createListItem = (input) => {
    const newListItem = document.createElement('li');
    newListItem.innerText = input;

    const deleteButton = createButton('Delete', () => {
        newListItem.remove();
    });

    const completeButton = createButton('Complete', () => {
        markAsCompleted(newListItem);
    });

    newListItem.appendChild(deleteButton);
    newListItem.appendChild(completeButton);

    return newListItem;
};

const createButton = (input, onClick) => {
    const button = document.createElement('button');
    button.innerText = input;
    button.addEventListener('click', onClick);
    return button;
};

const markAsCompleted = (item) => {
    item.classList.toggle('completed');
    if (item.classList.contains('completed')) {
        completedList.appendChild(item);
    } else {
        todoList.appendChild(item);
    }
};

const showDateButton = document.createElement('button');
showDateButton.innerText = 'Show Date';
showDateButton.addEventListener('click', () => {
    const currentDate = new Date();
    alert(`Today's date is: ${currentDate.toDateString()}`);
});

document.body.appendChild(showDateButton);
