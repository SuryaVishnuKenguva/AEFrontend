import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        { name, email, password },
        { withCredentials: true }
      );
      console.log(res.data.message);
      window.location.href = "/signin";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
