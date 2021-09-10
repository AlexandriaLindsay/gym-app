import React from 'react';


const Image = ({
  className,
  src,
  width,
  height,
  alt,
  title,
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
      title={title}
      alt={alt} />
  );
}


export default Image;