import { Tarea } from './Tarea.js';

const $taskInput = document.getElementById('taskInput');
const $addTaskBtn = document.getElementById('addTaskBtn');
const $taskList = document.getElementById('taskList');

let tareas = [];

$addTaskBtn.addEventListener('click', function() {
    const taskDescription = $taskInput.value.trim();
    if (taskDescription !== '') {
        const tarea = new Tarea(taskDescription);
        tareas.push(tarea);
        renderTasks();
        $taskInput.value = '';
    }
});

function renderTasks() {
    $taskList.innerHTML = '';
    tareas.forEach(tarea => {
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item task-item';
        taskItem.id = `task-${tarea.id}`;

        const taskSpan = document.createElement('span');
        taskSpan.textContent = tarea.descripcion;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', function() {
            deleteTask(tarea.id);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        $taskList.appendChild(taskItem);
    });
}

function deleteTask(id) {
    const tarea = tareas.find(t => t.id === id);

    if (tarea) {
        Swal.fire({
            title: `¿Deseas borrar la tarea ${tarea.descripcion}?`,
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                tareas = tareas.filter(tarea => tarea.id !== id);
                renderTasks();
                Swal.fire({
                    title:'¡Eliminada!',
                    text: 'La tarea ha sido eliminada.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                }
                );
            }
        });
    }
}