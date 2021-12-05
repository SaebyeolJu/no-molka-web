import React from "react";

import { Button } from "@material-ui/core";

import Logo from "../img/logo.png";
import "../css/Intro.css";

const intro = () => {
  return (
    <div className="container">
      <div className="slogan">
        <h1>My Life is NOT Your Porn</h1>
      </div>
      <img src={Logo} alt="logo" className="logo" />
      <h2>몰래 카메라는 반드시 처벌 받아야하는 불법 촬영 '범죄'입니다.</h2>
      <Button
        size="large"
        variant="contained"
        color="inherit"
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: 24,
        }}
      >
        STOP
      </Button>
    </div>
  );
};

export default intro;
