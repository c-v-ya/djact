import React from "react";
import axiosAPI from "../api/axiosApi";

const ProfilePage = () => {
  const handleClick = async () => {
    const response = await axiosAPI.get("protected/");
    alert(JSON.stringify(response.data));
  };
  return (
    <div>
      <h1>Profile page</h1>
      <p>Only logged in users should see this</p>
      <button onClick={handleClick}>GET protected</button>
    </div>
  );
};

export default ProfilePage;
