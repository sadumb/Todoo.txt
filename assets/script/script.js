let addBtn = document.querySelector('#addBtn');
let userInput = document.querySelector('#input_task');
let taskList = document.querySelector('.list');
let defaultTask = document.querySelector('.default');
let key = 1;
let testLocal = document.querySelector('.test_local')

checkForStorage()

addBtn.addEventListener('click', function () {
  let userTask = userInput.value;
  let tasks = document.querySelectorAll('.task');

  // check if the task is already added

  for (eachTask of tasks) {
    if (eachTask.innerText === userTask) {
      alert('Oops, task already added.');
      return;
    }
  }

  // check if user input nothing

  if (userTask === '') {
    alert('Please enter a new task.');
    return;
  }

  if(!defaultTask.classList.contains('removed')) {
    defaultTask.classList.toggle('removed');
  }

  taskList.innerHTML += `
    <div class="active_task">
      <input type="checkbox" class="checkbox">
      <label class="task">${userTask}</label><br>
      <div class="actions">
        <i class="fas fa-edit edit"></i>
        <i class="fas fa-trash-alt delete"></i>
      </div>
    </div>
    `;

  //
  let deleteBtn = document.querySelectorAll('.delete');
  for (button of deleteBtn) {
    deleteTask(button);
  }

  //
  let editBtnKey = document.querySelectorAll('.edit');
  for (editBtn of editBtnKey) {
    editTask(editBtn);
    console.log('test');
  }

  //
  let checkbox = document.querySelectorAll('.checkbox');
  for (checkBtn of checkbox) {
    taskFinished(checkBtn);
  }
  userInput.value = '';

});

// Execute a function when the user releases a key on the keyboard
userInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addBtn.click();
  }
});

const deleteTask = (button) => {
  _button = button;
  _button.addEventListener('click', function () {
    if (confirm('Delete this task?')) {
      button.parentElement.parentElement.remove();
    } else {
      return;
    }
  });
};

const editTask = (edit) => {
  _edit = edit;
  _edit.addEventListener('click', function () {
    let edit_input = prompt('Change task to: ');
    let grand = button.parentElement.parentElement;
    let valueTarget = grand.firstElementChild.nextElementSibling;

    if (edit_input) {
      valueTarget.innerText = edit_input;
      return valueTarget;
    } else {
      return;
    }
  });
};

const taskFinished = (button) => {
  let task_done = document.querySelector('.task_done');
  button.addEventListener('click', function () {
    // move completed task to task_done div
    task_done.appendChild(button.parentElement);
    // give line-trough style to finished task
    let task = button.nextElementSibling;
    task.classList.toggle('done');
  });
};

function checkForStorage() {
  console.log(typeof(Storage));
  return typeof(Storage) !== "undefined";
}
