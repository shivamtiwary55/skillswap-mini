import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skill: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleRegister = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="form-container">
      <h1>Register</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />

      <input
        type="text"
        name="skill"
        placeholder="Enter your skill"
        onChange={handleChange}
      />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;