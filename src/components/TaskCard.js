import React from 'react';

function TaskCard({ task, onUpdateTask, onDeleteTask, onMoveTask }) {
  const { id, title, listId } = task;

  const handleTitleChange = (e) => {
    const updatedTask = { ...task, title: e.target.value };
    onUpdateTask(id, updatedTask);
  };

  const handleListChange = (e) => {
    const newListId = e.target.value;
    onMoveTask(id, newListId);
  };

  const handleDelete = () => {
    onDeleteTask(id);
  };

  return (
    <div className="task-card">
      <input type="text" value={title} onChange={handleTitleChange} />
      <select value={listId} onChange={handleListChange}>
        <option value="list1">List 1</option>
        <option value="list2">List 2</option>
        <option value="list3">List 3</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskCard;
