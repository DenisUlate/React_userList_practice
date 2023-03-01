import React, { useState } from "react";

function UserList() {
  const [users, setUsers] = useState(["John", "Mary", "Tom"]);
  const [newUser, setNewUser] = useState("");

  function handleInputChange(event) {
    setNewUser(event.target.value);
  }

  function addNewUser() {
    setUsers([...users, newUser]);
    setNewUser("");
  }

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="User Name"
          value={newUser}
          onChange={handleInputChange}
        />
        <button onClick={addNewUser}>Add User</button>
      </div>
    </div>
  );
}

export default UserList;
