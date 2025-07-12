import React from 'react';

export default function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <ul className="task-list">
      {todos.map(t => (
        <li key={t._id} className={t.status === 'Complete' ? 'completed' : ''}>
          <span onClick={() => onUpdate(t._id, { status: t.status === 'Open' ? 'Complete' : 'Open' })}>
            {t.title}
          </span>
          <button onClick={() => onDelete(t._id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}
