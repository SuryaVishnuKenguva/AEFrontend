import React, { useState } from "react";
import Header from "../../components/Header/Header";
import pf from "../../assets/icons/Profile.png";
import Manage from "./Manage-Teams/Manage";
import SavedP from "./Saved-Payments/SavedP";
import MyPayments from "./My-Payments/MyPayments";
import MyFavourite from "./My-Favourites/MyFavourite";
import "./Profile.css";
import UserProfile from "./User-Profile/UserProfile";
import Footer from "../../components/Footer/Footer";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [sections, setSections] = useState(1);
  const {user,logOut}=useData();
  const navigate=useNavigate();

  const handleLogout=()=>{
    logOut();
    navigate("/")
}
  const handleSections = (prop) => {
    setSections(prop);
  };
  return (
    <div>
      <Header />
      <div className="profile-div">
        <div className="left-p">
          <div
            className="user-p"
            onClick={() => handleSections(1)}
            style={{
              backgroundColor: sections === 1 ? "red" : "",
            }}
          >
            <img src={pf} alt="" />
            <div>
              <span>Hello,</span>
              <span>{user.name}</span>
            </div>
          </div>
          <div className="p-sections">
            <div>
              <div
                className="manage-teams"
                onClick={() => handleSections(2)}
                style={{ backgroundColor: sections === 2 ? "red" : "" }}
              >
                Manage Teams
              </div>
              <div
                className="saved-payments"
                onClick={() => handleSections(3)}
                style={{
                  backgroundColor: sections === 3 ? "red" : "",
                }}
              >
                Saved Payments
              </div>
              <div
                className="mypayments"
                onClick={() => handleSections(4)}
                style={{ backgroundColor: sections === 4 ? "red" : "" }}
              >
                My Tournaments
              </div>
              <div
                className="myfavourites"
                onClick={() => handleSections(5)}
                style={{ backgroundColor: sections === 5 ? "red" : "" }}
              >
                My Favourites
              </div>
              
            </div>
            <div onClick={handleLogout}>Logout</div>
          </div>
        </div>
        <div className="right-p">
          {sections === 1 ? <UserProfile /> : ""}
          {sections === 2 ? <Manage /> : ""}
          {sections === 3 ? <SavedP /> : ""}
          {sections === 4 ? <MyPayments /> : ""}
          {sections === 5 ? <MyFavourite /> : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
