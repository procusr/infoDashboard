import React, { useState, useEffect } from "react";
import InfoBar from "./Components/InfoBar";
import apiRequests from "./apiRequests";

export default function Home(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await apiRequests.getAllStatus();
      console.log("response", response);
      setUsers(response);
    }
    fetchUsers();
  }, [users]);

  return (
    <div>
    <p> Red : Occupied &nbsp; Green : Available  &nbsp; Gray : Unknown</p>  
      {users.map((user) => (
        <InfoBar key={user._id} name={user.name} status={user.status} />
      ))}
    </div>
  );
}
