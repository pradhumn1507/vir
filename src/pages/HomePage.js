import React, { useState } from 'react';
import TaskList from '../components/TaskList';

function HomePage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const moveTask = (taskId, newListId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, listId: newListId } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskList
        tasks={tasks}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onMoveTask={moveTask}
      />
    </div>
  );
}

export default HomePage;
