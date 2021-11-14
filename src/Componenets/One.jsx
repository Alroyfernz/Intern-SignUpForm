import React from "react";
import "./one.css";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const One = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <div className="name">
        <div className="first_name">
          <span>Name</span>
          <Input variant="filled" placeholder="Filled" />
        </div>
        <div className="first_name">
          <span>Name</span>
          <Input variant="filled" placeholder="Filled" />
        </div>
      </div>
      <div className="cred">
        <div className="email">
          <span>Email</span>
          <Input variant="filled" placeholder="Filled" />
        </div>
        <div className="email">
          <span>Password</span>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              variant="filled"
              type={show ? "text" : "password"}
              placeholder="Enter password"
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
  );
};

export default One;
