"use client"
import React from "react";
import { Divider } from "antd";
const AntdDivider = ({ text, className }) => (
  <>
    <Divider className={className}>{text}</Divider>
  </>
);
export default AntdDivider;
