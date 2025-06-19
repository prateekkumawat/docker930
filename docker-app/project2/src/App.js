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
    <div className="container py-5">
      <h2 className="mb-4 text-center">👥 User Manager</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100" onClick={addUser}>
            ➕ Add User
          </button>
        </div>
      </div>

      <table className="table table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(u.id)}>
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="3">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
