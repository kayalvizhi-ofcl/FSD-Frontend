import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Details</h1>

      <p>User ID: {id}</p>

      <button onClick={() => navigate("/users")}>
        ⬅ Back to Users
      </button>
    </div>
  );
}

export default UserDetails;