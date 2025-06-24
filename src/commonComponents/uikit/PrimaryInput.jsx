import React from "react";
import { Input } from "antd";

const PrimaryInput = ({placeholder, className, onChange, type,value,disable,prefix,suffix}) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        type={type}
        value={value}
        prefix={prefix}
        suffix={suffix}
        disabled={disable}
      />
      
    </>
  );
};
export default PrimaryInput;
