import React from "react";
import { Button } from "antd";
const PrimaryButton = ({
  onClick,
  className,
  label,
  type = "primary",
  icon,
  href,
}) => {
  return (
    <>
      <Button
        type={type}
        className={className}
        onClick={onClick}
        icon={icon}
        href={href}
      >
        {label}
      </Button>
    </>
  );
};

export default PrimaryButton;

export function SecondaryBtn({ className, label, icon, ...rest }) {
  return (
    <Button className={className} {...rest}>
      {icon && <span className="custom-icon">{icon}</span>}
      <span>{label}</span>
    </Button>
  );
}
