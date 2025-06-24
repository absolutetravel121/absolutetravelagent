"use client";
import React from "react";
import { Typography } from "antd";
const { Title} = Typography;

export default function HeadingText({level,className,textTitle}) {
  return (

      <Title level={level} className={className}>{textTitle}</Title>

  );
}
