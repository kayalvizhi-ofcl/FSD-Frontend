import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

function Users() {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchUsers = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  const avgLength = useMemo(() => {
    if (!users.length) return 0;
    const total = users.reduce((sum, u) => sum + u.name.length, 0);
    return (total / users.length).toFixed(2);
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>

      <input
        placeholder="Filter users"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button onClick={fetchUsers}>Refresh</button>

      <p>Average Name Length: {avgLength}</p>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;