import React from 'react';


const DoubleCol = ({ 
    children,
    ...props 
}) => (
  <>
    <div
        {...props}
        className="doubleCol"
    >
        {children}
    </div>
  </>
);

export default DoubleCol;  