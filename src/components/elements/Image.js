import React from 'react';


const Image = ({
  className,
  src,
  width,
  height,
  alt,
  link,
  ...props
}) => {
  

  return (
    <img
      {...props}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt} />
  );
}


export default Image;