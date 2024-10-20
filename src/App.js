import React from 'react';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm'; 
import './style.css';


function App() {
    return (
        <div className="App">
            <h1>To-Do List Application</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;

