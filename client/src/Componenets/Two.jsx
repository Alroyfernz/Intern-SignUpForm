import { Input } from "@chakra-ui/react";
import React from "react";
import "./Main.css";
const Two = () => {
  return (
    <div>
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
  );
};

export default Two;
