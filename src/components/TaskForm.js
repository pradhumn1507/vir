import React, { useState } from 'react';
import TaskCard from './TaskCard';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      listId: 'list1', // Default list ID
    };
    onAddTask(newTask);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
