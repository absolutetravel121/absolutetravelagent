"use client"
import React from 'react'
import { Typography } from 'antd';
const { Paragraph} = Typography;
export default function ParaText({text,className}) {
  return (
    <>
      <Paragraph className={className}>
        {text}
      </Paragraph>
    </>
  )
}

