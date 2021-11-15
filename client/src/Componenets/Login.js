import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../Redux/constants";
import "./Main.css";
const Login = () => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [cpassword, setCpassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(data);
    if (data.email === "" || data.password === "") {
      window.alert("input fiels cannot be empty");
      return;
    }
    if (data.password !== cpassword) {
      window.alert("Passwords do not match");
      return;
    }
    dispatch({ type: USER_LOGIN_REQUEST });

    try {
      const loggedUser = await axios.get("/api/auth/login", data);
      if (loggedUser.status === 200) {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: loggedUser.data });
        sessionStorage.setItem("userInfo", JSON.stringify(loggedUser.data));
        navigate("/");
      } else {
        window.alert("You are not registered");
        dispatch({ type: USER_LOGIN_FAIL });
      }
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL });
      console.log("Error while logging in", error);
    }
  };
  return (
    <>
      <div className="mobile_logo">
        <div className="title">
          <img src="/Icon.png" alt="" width="40px" height="40px" />
        </div>
      </div>
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
              New to webstar?<Link to="/register"> register</Link>
            </div>
          </div>
          <div className="right_wrapper">
            <div className="right_container">
              <div className="heading">
                <h1>Login to Webstar</h1>
              </div>
              <div className="content">
                <form onSubmit={handleLogin}>
                  <div className="cred">
                    <div className="email">
                      <span>Email</span>
                      <Input
                        variant="filled"
                        placeholder="Filled"
                        onChange={(e) => {
                          data.email = e.target.value;
                          setData(data);
                        }}
                      />
                    </div>
                    <div className="email">
                      <span>Password</span>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          variant="filled"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          onChange={(e) => {
                            data.password = e.target.value;
                            setData(data);
                          }}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </div>
                    <div className="email">
                      <span>Confirm Password</span>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          variant="filled"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          onChange={(e) => {
                            setCpassword(e.target.value);
                          }}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="button">
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      className="submit_btn"
                      onClick={() => {
                        console.log("clicked");
                      }}
                      type="Submit"
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </div>

              <div className="seperation">
                <span className="text-seperate">Or</span>
              </div>
              <div className="socials">
                <Button
                  className="submit_btn"
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
    </>
  );
};

export default Login;
