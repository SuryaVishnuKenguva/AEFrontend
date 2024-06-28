import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg,setErrormsg]=useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        { name, email, password },
        { withCredentials: true }
      );
      window.location.href = "/signin";
    } catch (err) {
      setErrormsg(err.response.data.error);
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
        {errormsg && <p>{errormsg}</p>}
      </form>
    </div>
  );
};

export default Register;
