import React, { useState, useEffect } from "react";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const Query5 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/query5", {
        withCredentials: true,
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.flatMap((item) => item.users));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income</th>
          <th>City</th>
          <th>Car</th>
          <th>Quote</th>
          <th>Phone Price</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.income}</td>
            <td>{user.city}</td>
            <td>{user.car}</td>
            <td>{user.quote}</td>
            <td>{user.phone_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Query5;
