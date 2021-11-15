import { HStack, Input, Textarea } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";

import React, { useState } from "react";
import "./Main.css";
const Two = () => {
  const [data, setData] = useState({});
  var [pincode, setPincode] = useState("");
  const handleUpdate = (e) => {
    if (pincode.length <= 6) {
      pincode += e.target.value;
      setPincode(pincode);
    }
  };
  console.log(pincode);
  return (
    <div>
      <div className="cred">
        <div className="company_field">
          <span>Company name</span>
          <Input
            variant="filled"
            placeholder="Filled"
            onChange={handleUpdate}
          />
        </div>
        <div className="address_field">
          <span>Address</span>
          <Textarea />
        </div>
        <div className="pincode_field">
          <span>Pincode</span>
          <HStack>
            <PinInput>
              <PinInputField onChange={handleUpdate} />
              <PinInputField onChange={handleUpdate} />
              <PinInputField onChange={handleUpdate} />
              <PinInputField onChange={handleUpdate} />
              <PinInputField onChange={handleUpdate} />
              <PinInputField onChange={handleUpdate} />
            </PinInput>
          </HStack>
        </div>
      </div>
    </div>
  );
};

export default Two;
