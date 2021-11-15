import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
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
import Slide from "@material-ui/core/Slide";
import "./Main.css";
import Two from "./Two";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Main = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
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
  const [cpassword, setCpassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRegitser = async () => {
    if (cpassword !== data.password) {
      window.alert("passwords do not match");
      return;
    }
    if (data.name === "") {
      window.alert("Input fields cannot be null");
    }
    try {
      const res = await axios.get("/api/auth/", {
        email: data.email,
        phoneNumber: data.phoneNumber,
      });
      if (res.data !== null) {
        onOpen;

        return;
      }
    } catch (error) {
      console.log("error while verifcation");
    }
    try {
      const regUser = await axios.post("/api/auth/register", data);
      if (regUser.status === 200) {
        navigate("/login");
      }
    } catch (error) {}
  };
  // handleRegitser();

  return (
    <>
      {/* <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button> */}
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
                <h1>Register to Webstar</h1>
              </div>
              <div className="content">
                <form onSubmit={handleRegitser}>
                  {/* <div>
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
                </div> */}
                  <Two />
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

export default Main;
