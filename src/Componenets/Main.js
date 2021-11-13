import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main">
      <div className="left">
        <div className="left_wrapper">
          <div className="left_top">
            <div className="title">
              <img src="/Icon.png" alt="" width="40px" height="40px" />
              <h1>Webstar</h1>
            </div>
            <div className="text">
              <h2>Create your next web page in no time</h2>
            </div>
          </div>

          <div className="photo">
            <img
              src="/Main.png"
              className="Main_img"
              alt=""
              width="200"
              height="200"
            />
          </div>
        </div>
      </div>
      <div className="right">sign up with google</div>
    </div>
  );
};

export default Main;
