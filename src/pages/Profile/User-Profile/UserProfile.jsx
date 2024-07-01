import React from "react";
import "./UserProfile.css";
const UserProfile = () => {
  return (
    <div className="user-profile">
      <div>
        <div>
          <span>Personal Information</span>
          <span>Edit</span>
        </div>
        <div>
          <div>
            <span>Agent Esports</span>
            <span>Host</span>
          </div>
          <div>
            <span>Your Gender</span>
            <div>
              <input type="radio" name="gender" />
              <label htmlFor="">Male</label>
              <input type="radio" name="gender" />
              <label htmlFor="">Female</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>Email Address</span>
          <span>Edit</span>
        </div>
        <div>
          <div>
            <span>example@gmail.com</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>Mobile Number</span>
          <span>Edit</span>
        </div>
        <div>
          <div>
            <span>9999999999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
