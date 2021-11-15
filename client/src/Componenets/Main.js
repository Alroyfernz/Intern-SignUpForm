import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Checkbox, InputLeftAddon } from "@chakra-ui/react";

import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  PinInput,
  PinInputField,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import "./Main.css";

import axios from "axios";

const Main = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [isLast, setIsLast] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [checkBox, setCheckBox] = useState(false);
  const finalRef = React.useRef();
  const checkRef = React.useRef(null);
  console.log(checkBox);
  const navigate = useNavigate();
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
  var [pincode, setPincode] = useState("");

  const [cpassword, setCpassword] = useState("");
  // const onj = useState(false);
  // const setOpen=onj[1];

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleRegitser = async (e) => {
    e?.preventDefault();
    data.pincode = pincode;
    setData(data);
    console.log(data);
    if (cpassword !== data.password) {
      window.alert("passwords do not match");
      return;
    }
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.password === "" ||
      data.phoneNumber === 0
    ) {
      window.alert("Input fields cannot be null");

      return;
    }
    if (isLast === false) {
      return;
    }
    try {
      const res = await axios.get("/api/auth/", {
        email: data.email,
        phoneNumber: data.phoneNumber,
      });
      if (res.data !== null) {
        onOpen();

        return;
      }
    } catch (error) {
      console.log("error while verifcation");
    }
    if (data.companyName === "") {
      return;
    }
    try {
      const regUser = await axios.post("/api/auth/register", data);
      if (regUser.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error while registering");
    }
  };
  // // handleRegitser();
  const handlePUpdate = (e) => {
    if (pincode.length <= 6) {
      pincode += e.target.value;
      setPincode(pincode);
    }
  };
  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are an existing user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You are already an user. Do you wish to Login in?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
              Existing user?<Link to="/login"> login</Link>
            </div>
          </div>
          <div className="right_wrapper">
            <div className="right_container">
              <div className="heading">
                {isLast === true && (
                  <FiArrowLeft
                    className="leftIcon"
                    onClick={() => setIsLast(!isLast)}
                  />
                )}
                <h1>Register to Webstar</h1>
              </div>
              <div className="content">
                <form onSubmit={handleRegitser}>
                  <div>
                    {isLast === false ? (
                      <>
                        <div>
                          <div className="name">
                            <div className="first_name">
                              <span className="HideS">Name</span>
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
                              <span className="HideS">Name</span>
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
                              <span className="HideS">Email</span>
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
                              <span className="HideS">Phone number</span>
                              <InputGroup>
                                <InputLeftAddon children="+91" />
                                <Input
                                  type="number"
                                  placeholder="phone number"
                                  variant="filled"
                                  onChange={(e) => {
                                    data.phoneNumber = e.target.value;
                                    setData(data);
                                  }}
                                />
                              </InputGroup>
                            </div>
                            <div className="email">
                              <span className="HideS">Password</span>
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
                                  <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleClick}
                                  >
                                    {show ? (
                                      <span className="HideS">Hide</span>
                                    ) : (
                                      <span>Show</span>
                                    )}
                                  </Button>
                                </InputRightElement>
                              </InputGroup>
                            </div>
                            <div className="email">
                              <span className="HideS">Confirm Password</span>
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
                                  <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleClick}
                                  >
                                    {show ? (
                                      <span className="HideS">Hide</span>
                                    ) : (
                                      <span>Show</span>
                                    )}
                                  </Button>
                                </InputRightElement>
                              </InputGroup>
                            </div>
                          </div>
                        </div>
                        <div className="button">
                          <Button
                            rightIcon={<MdArrowForward />}
                            colorScheme="teal"
                            variant="outline"
                            className="submit_btn"
                            type="submit"
                            onClick={() => {
                              setIsLast(true);
                              console.log("out out");
                            }}
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="cred">
                          <div className="company_field">
                            <span className="HideS">Company name</span>
                            <Input
                              variant="filled"
                              placeholder="Filled"
                              onChange={(e) => {
                                data.companyName = e.target.value;
                                setData(data);
                              }}
                            />
                          </div>
                          <div className="address_field">
                            <span className="HideS">Address</span>
                            <Textarea
                              variant="filled"
                              onChange={(e) => {
                                data.address = e.target.value;
                                setData(data);
                              }}
                            />
                          </div>
                          <div className="pincode_field">
                            <span className="HideS">Pincode</span>
                            <HStack>
                              <PinInput>
                                <PinInputField
                                  onChange={handlePUpdate}
                                  variant="filled"
                                />
                                <PinInputField
                                  onChange={handlePUpdate}
                                  variant="filled"
                                />
                                <PinInputField
                                  onChange={handlePUpdate}
                                  variant="filled"
                                />
                                <PinInputField
                                  onChange={handlePUpdate}
                                  variant="filled"
                                />
                                <PinInputField
                                  onChange={handlePUpdate}
                                  variant="filled"
                                />
                                <PinInputField
                                  onChange={handlePUpdate}
                                  variant="filled"
                                />
                              </PinInput>
                            </HStack>
                          </div>
                          <div>
                            <Checkbox
                              className="checkBox"
                              ref={checkRef}
                              onClick={() => setCheckBox(true)}
                            >
                              I accept the{" "}
                              <span className="link"> Terms of Use</span> &{" "}
                              <span className="link"> Privacy Policy</span>
                            </Checkbox>
                          </div>
                        </div>
                        <div className="button">
                          <Button
                            rightIcon={<MdArrowForward />}
                            colorScheme="teal"
                            variant="outline"
                            className="submit_btn"
                            type="submit"
                            onClick={() => {
                              if (isLast) {
                                handleRegitser();
                                console.log("inin");
                              } else {
                                setIsLast(true);
                                console.log("out out");
                              }
                            }}
                          >
                            {isLast === true ? "Register" : "Next"}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </form>
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
                  <span className="HideS"> Sign up with Facebook</span>
                </Button>
                <Button
                  className="google"
                  leftIcon={<FcGoogle />}
                  colorScheme="teal"
                  variant="outline"
                >
                  <span className="HideS"> Sign up with Google</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
