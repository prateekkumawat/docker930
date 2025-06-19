import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  const addUser = async () => {
    if (!form.name || !form.email) return;
    await axios.post(API_URL, form);
    setForm({ name: "", email: "" });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>User Management</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={{ marginRight: 10 }}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={{ marginRight: 10 }}
      />
      <button onClick={addUser}>Add User</button>

      <ul style={{ marginTop: "2rem" }}>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email}){" "}
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
