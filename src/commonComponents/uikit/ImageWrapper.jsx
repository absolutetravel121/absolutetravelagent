import Image from "next/image";
import React from "react";

const ImageWrapper = ({
  src,
  className,
  width,
  height,
  alt,
  onClick,
  priority,
  fill,
}) => {
  return (
    <>
      <Image
        src={src}
        fill={fill}
        className={className}
        onClick={onClick}
        priority={priority}
        width={width}
        height={height}
        alt={alt}
      />
    </>
  );
};

export default ImageWrapper;
