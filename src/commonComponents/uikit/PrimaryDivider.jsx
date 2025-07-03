"use client"
import React from "react";
import { Divider } from "antd";
const PrimaryDivider = ({ text, className }) => (
  <>
    <Divider className={className}>{text}</Divider>
  </>
);
export default PrimaryDivider;
