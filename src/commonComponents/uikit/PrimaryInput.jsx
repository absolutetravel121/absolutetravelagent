import React from "react";
import { Input } from "antd";

const PrimaryInput = ({
  placeholder,
  className,
  onChange,
  type,
  value,
  disable,
  prefix,
  suffix,
  onClick,
  name,
  maxLength
}) => {
  return (
    <Input
      placeholder={placeholder}
      className={className}
      onChange={(e) => onChange(e)}
      onClick={onClick}
      type={type}
      value={value}
      prefix={prefix}
      suffix={suffix}
      disabled={disable}
      name={name}
      maxLength={maxLength}
    />
  );
};

export default PrimaryInput;

export const SearchInput = ({
  placeholder,
  className,
  onChange,
  type,
  value,
  disable,
  prefix,
  suffix,
}) => {
  return (
    <>
      <Input.Search
        placeholder="Filled"
        variant="filled"
        className={className}
      />
    </>
  );
};
