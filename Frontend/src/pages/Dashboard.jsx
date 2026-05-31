import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/users"
      );

      const data = await response.json();
      console.log(data);

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>SkillSwap Users 🚀</h1>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>Skill: {user.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;