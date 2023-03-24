const taskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTaskButton');
const incompleteTasks = document.getElementById('toDo');
const completedTask = document.getElementById('completedTasks');

const addTask = () => {

    text = taskInput.value;
    li = document.createElement('li');
    li.innerHTML = `<label>` + text + `</label>`;
    incompleteTasks.appendChild(li);
    
    li.addEventListener("click", function(){
       alert(this.textContent);
    })
}

addTaskButton.onclick = addTask;

document.getElementById('addTaskButton').disabled = true;

document.getElementById('newTask').addEventListener('keyup', e => {
  if (e.target.value == "") {
    document.getElementById('addTaskButton').disabled = true;
  }
  else {
    document.getElementById('addTaskButton').disabled = false;
  }
});


