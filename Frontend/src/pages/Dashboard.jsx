import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConnect = (id) => {
    setConnectedUsers([...connectedUsers, id]);
  };

  return (
    <div className="dashboard-container">
      <h1>SkillSwap Users 🚀</h1>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <h2>{user.name}</h2>

            <div className="skills-container">
              {user.skill.split(",").map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill.trim()}
                </span>
              ))}
            </div>

            {connectedUsers.includes(user._id) ? (
              <button className="connected-btn">Requested ✅</button>
            ) : (
              <button onClick={() => handleConnect(user._id)}>Connect</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
