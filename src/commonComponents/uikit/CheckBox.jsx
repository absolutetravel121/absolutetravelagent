"use client";
import React from "react";
import { Checkbox } from "antd";
const CheckBox = ({ onChange, label, className }) => {
  return (
    <>
      <Checkbox onChange={onChange}  className={className}>
        {label}
      </Checkbox>
    </>
  );
};
export default CheckBox;
