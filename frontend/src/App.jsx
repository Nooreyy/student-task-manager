
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/api/tasks";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  async function fetchTasks() {
    try {
      const response = await axios.get(API);
      setTasks(response.data);
      setError("");
    } catch (err) {
      setError("Unable to load tasks");
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function addTask() {
    if (!title.trim()) {
      setError("Please enter a task title");
      return;
    }

    try {
      await axios.post(API, { title });
      setTitle("");
      setError("");
      fetchTasks();
    } catch (err) {
      setError("Unable to add task");
    }
  }

  function startEdit(task) {
    setEditId(task._id);
    setTitle(task.title);
    setError("");
  }

  async function updateTask() {
    if (!title.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    try {
      await axios.put(`${API}/${editId}`, { title });
      setTitle("");
      setEditId(null);
      setError("");
      fetchTasks();
    } catch (err) {
      setError("Unable to update task");
    }
  }

  function cancelEdit() {
    setEditId(null);
    setTitle("");
    setError("");
  }

  async function deleteTask(id) {
    try {
      await axios.delete(`${API}/${id}`);

      if (editId === id) {
        cancelEdit();
      }

      setError("");
      fetchTasks();
    } catch (err) {
      setError("Unable to delete task");
    }
  }

  return (
    <div className="container">
      <h1>Student Task Manager</h1>

      <div className="task-form">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {editId ? (
          <>
            <button onClick={updateTask}>Update Task</button>
            <button className="cancel" onClick={cancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>

      {error && <p className="error">{error}</p>}

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <span>{task.title}</span>

              <div className="actions">
                <button
                  className="edit"
                  onClick={() => startEdit(task)}
                >
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
