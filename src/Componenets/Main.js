import { Button } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import "./Main.css";
import { Link } from "react-router-dom";
import One from "./One";
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
      <div className="right">
        <div className="title_right">
          <div className="existing">
            Existing user?<a href="/">login</a>
          </div>
        </div>
        <div className="right_wrapper">
          <div>
            <div className="heading">
              <h1>Register to Webstar</h1>
            </div>
            <div className="content">
              <One />
            </div>
            <div className="button">
              <Button
                rightIcon={<MdArrowForward />}
                colorScheme="teal"
                variant="outline"
              >
                Call us
              </Button>
            </div>
            <div className="seperation">
              <hr className="line" />
              <span className="text-seperate">Or</span>
            </div>
            <div className="socials">
              <Button
                leftIcon={<FaFacebook />}
                colorScheme="teal"
                variant="outline"
              >
                Sign up with Facebook
              </Button>
              <Button
                className="google"
                leftIcon={<FcGoogle />}
                colorScheme="teal"
                variant="outline"
              >
                Sign up with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
