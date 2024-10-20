import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../api/taskApi';  

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    const handleToggleComplete = async (task) => {
        task.isCompleted = !task.isCompleted;
        await updateTask(task._id, task);
        loadTasks();
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                            {task.title}
                        </span>
                        <button onClick={() => handleToggleComplete(task)}>
                            {task.isCompleted ? 'Unmark' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
