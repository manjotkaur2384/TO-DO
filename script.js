
document.addEventListener('DOMContentLoaded', function() {
   
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

   
    addButton.addEventListener('click', function() {
        
        const todoText = todoInput.value.trim();
        
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = ''; 
        }
    });

    
    function addTodoItem(todoText) {
        
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');

      
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        todoList.appendChild(li); 

      
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                label.classList.add('completed');
                todoList.appendChild(li); 
            } else {
                label.classList.remove('completed');
            }
        });

       
        deleteButton.addEventListener('click', function() {
            li.remove(); 
        });
    }
});
