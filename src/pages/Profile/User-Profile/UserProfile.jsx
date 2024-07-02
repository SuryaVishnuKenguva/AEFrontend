import React, { useState,useEffect } from "react";
import "./UserProfile.css";
import { useData } from "../../../Context/DataContext";
const UserProfile = () => {
  const [edit,setEdit]=useState(false)

  const {user}=useData()

  const toggleEdit = (field) => {
    setEdit(!edit);
  };

  return (
    <div className="user-profile">
      <div>
        <div>
          <span>Personal Information</span>
          <span onClick={()=>toggleEdit()} className="edit-span">
            {edit ? "Cancel" : "Edit"}
          </span>

        </div>
        <div>
          {
            edit? 
            <div>
              <div className="input-div">
              <span>First Name</span>
              <input
               type="text"
                defaultValue={user.firstname}
                className="edit-mode-input"
               />
              </div>
              <div className="input-div">
                <span>Last Name</span>
              <input type="text" defaultValue={user.lastname} className="edit-mode-input"/>
              </div>
            </div>
            :
            <div>
            <input type="text" defaultValue={user.firstname} readOnly className="hide-mode-input" />
            <input type="text" defaultValue={user.lastname} readOnly className="hide-mode-input"/>
          </div>
          }
        </div>
      </div>
      <div>
        <div>
          <span>Email Address</span>
        </div>
        <div>
        {
            edit ? 
            <div>
              <input
               type="text"
                defaultValue={user.email}
                className="edit-mode-input"
               />
            </div>
            :
            <div>
            <input type="text" defaultValue={user.email} readOnly className="hide-mode-input" />
          </div>
          }
        </div>
      </div>
      <div>
        <div>
          <span>Mobile Number</span>
        </div>
        <div>
        {
            edit ? 
            <div>
              <input
               type="text"
                defaultValue={user.mobile}
                className="edit-mode-input"
               />
            </div>
            :
            <div>
            <input type="text" defaultValue={user.mobile} readOnly className="hide-mode-input" />
          </div>
          }
        </div>
        <button>Save</button>
      </div>
    </div>
  );
};

export default UserProfile;
