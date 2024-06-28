import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      if (res) {
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSignin}>
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
