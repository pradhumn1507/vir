import React, { useState } from 'react';
import './TaskCard.css';

const TaskCard = ({ task, handleTaskUpdate, handleTaskDelete, handleMoveCard }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    if (title.trim() !== '') {
      handleTaskUpdate(task.id, title);
      setEditing(false);
    }
  };

  const handleDelete = () => {
    handleTaskDelete(task.id);
  };

  const handleMove = (event) => {
    const newlistId = event.target.value;
    handleMoveCard(task.id, newlistId);
  };

  return (
    <div className="task-card">
      {editing ? (
        <div className="task-card__editing">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button className="task-card__save-button" onClick={handleUpdate}>
            Save
          </button>
        </div>
      ) : (
        <p>{task.title}</p>
      )}
      <div className="task-card__actions">
        <button className="task-card__edit-button" onClick={() => setEditing(!editing)}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
        <button className="task-card__delete-button" onClick={handleDelete}>
          Delete
        </button>
        <select className="task-card__select" value={task.listId} onChange={handleMove}>
          <option value="list1">List 1</option>
          <option value="list2">List 2</option>
          <option value="list3">List 3</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
