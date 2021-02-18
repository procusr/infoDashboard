import React, { useState, useEffect } from "react";
import apiRequests from "./apiRequests";

import StatusBar from "./Components/StatusBar";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);
  const [choice, setChoice] = useState("Available");

  useEffect(() => {
    async function fetchUsers() {
      const response = await apiRequests.getAllStatus();
      console.log("response", response);
      setUsers(response);
    }
    fetchUsers();
  }, []);

  const handleSubmit = async (id) => {
    const operator = users.find((user) => user._id === id);
    console.log("operator ->", operator);
    const changedStatus = { ...operator, status: choice };
    const response = await apiRequests.updateStatus(id, changedStatus);
    if (response) {
      setUsers(users.map((user) => (user._id !== id ? user : response)));
    }
  };

  return (
    <div className="Content">
      <p> Change your status</p>

      <ul>
        {users.map((user) => (
          <li
            key={user._id}
            style={{
              justifyContent: "space-between",
              width: 400,
              borderRadius: 5,
              backgroundColor: "green",
            }}
          >
            <p>{user.name}</p>
            <StatusBar
              currentState={user.status}
              onSubmit={() => handleSubmit(user._id)}
              onChange={(value) => setChoice(value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
