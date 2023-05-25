import React from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

function TaskList({ tasks, onAddTask, onUpdateTask, onDeleteTask, onMoveTask }) {
  return (
    <div>
      <h2>Tasks</h2>
      <TaskForm onAddTask={onAddTask} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onMoveTask={onMoveTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
