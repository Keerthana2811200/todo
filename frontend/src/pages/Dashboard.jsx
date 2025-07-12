import React, { useEffect, useState } from 'react';
import API from '../api';
import { getToken, removeToken } from '../utils/auth';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Dashboard() {
  const [todos, setTodos] = useState([]);

  const token = getToken();
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    API.get('/tasks', { headers })
      .then(res => setTodos(res.data))
      .catch(err => {
        console.error(err);
        removeToken();
        window.location.href = '/';
      });
  }, [token]);

  const add = data =>
    API.post('/tasks', data, { headers }).then(r => setTodos([...todos, r.data]));

  const update = (id, data) =>
    API.put(`/tasks/${id}`, data, { headers }).then(r =>
      setTodos(todos.map(t => (t._id === id ? r.data : t)))
    );

  const del = id =>
    API.delete(`/tasks/${id}`, { headers }).then(() =>
      setTodos(todos.filter(t => t._id !== id))
    );

  return (
    <div className="container">
      <button className="logout-btn" onClick={() => { removeToken(); window.location.href = '/'; }}>
        Logout
      </button>
      <h2>Your Todos</h2>
      <TodoForm onAdd={add} />
      <TodoList todos={todos} onUpdate={update} onDelete={del} />
    </div>
  );
}
