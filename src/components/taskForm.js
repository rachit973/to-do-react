import React, { useState } from 'react';
import { addTask } from '../api/taskApi';

const TaskForm = ({ refreshTasks }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask({ title });
        setTitle('');
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
