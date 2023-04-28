import React from "react";
import logo from "../assets/Knowit_Hands.gif";

import { useNavigate } from "react-router";
const Start: React.FC<any> = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hackaton Tammsvik 2023</p>
    </div>
  );
};

export default Start;
