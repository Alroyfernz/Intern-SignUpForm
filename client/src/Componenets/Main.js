import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import "./Main.css";

import One from "./One";
const Main = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: 0,
    companyName: "",
    address: "",
    pincode: 0,
  });
  const [cpassword, setCpassword] = useState("");

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
            Existing user?<Link to="/login"> register</Link>
          </div>
        </div>
        <div className="right_wrapper">
          <div className="right_container">
            <div className="heading">
              <h1>Register to Webstar</h1>
            </div>
            <div className="content">
              <div>
                <div className="name">
                  <div className="first_name">
                    <span>Name</span>
                    <Input
                      variant="filled"
                      placeholder="Filled"
                      onChange={(e) => {
                        data.firstName = e.target.value;
                        setData(data);
                      }}
                    />
                  </div>
                  <div className="first_name">
                    <span>Name</span>
                    <Input
                      variant="filled"
                      placeholder="Filled"
                      onChange={(e) => {
                        data.lastName = e.target.value;
                        setData(data);
                      }}
                    />
                  </div>
                </div>
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
              </div>
            </div>
            <div className="button">
              <Button
                rightIcon={<MdArrowForward />}
                colorScheme="teal"
                variant="outline"
                className="submit_btn"
                onClick={() => {
                  console.log(data);
                }}
              >
                Next
              </Button>
            </div>
            <div className="seperation">
              <hr className="line" />
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
  );
};

export default Main;
