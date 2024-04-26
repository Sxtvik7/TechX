import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Login&signup from/usersSlice";
import LoginUser from "../Login&signup from/LoginUser";

import "./userProfile.css"

const UserProfile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  const handlelogoutUser = (user) => {
    dispatch(logout(user))
  }

  return (
    <div>
      {user ? (
        <div className="profile-main">
          <h2>User Profile</h2>
          <div className="profile-info">
          <p>{user.email}</p>
          <button onClick={()=> handlelogoutUser(user)}>Logout</button>
          </div>
        </div>
      ) : (
        <LoginUser />
      )}
    </div>
  );
};

export default UserProfile;
