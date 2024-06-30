import React, { useState } from "react";
import axios from "axios";
import './Register.css'

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState(0);
  const [mpin, setMpin] = useState(0);
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        { firstname,lastname, email,mobileno,mpin,state, password },
        { withCredentials: true }
      );
      window.location.href = "/signin";
    } catch (err) {
      setErrormsg(err.response.data.error);
    }
  };

  const handleState = (event) => {
    setState(event.target.value);
  };
  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="name"
          placeholder="First Name"
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <input
          type="name"
          placeholder="Last Name"
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="name"
          placeholder="Mobile Number"
          onChange={(e) => setMobileno(e.target.value)}
          required
        />
        <input
          type="name"
          placeholder="Mpin"
          onChange={(e) => setMpin(e.target.value)}
          required
        />
        <label htmlFor="state">Select a state:</label>
        <select id="state" name="state" value={state} onChange={handleState} required>
          <option value="">Select State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Register</button>
        {errormsg && <p>{errormsg}</p>}
      </form>
    </div>
  );
};

export default Register;
