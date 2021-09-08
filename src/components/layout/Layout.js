import React from 'react';


const LayoutDefault = ({ 
    children,
    className,
    role,
    ...props 
}) => (
  <>
    <main
        {...props}
        className={className}
        role={role}
    >
        {children}
    </main>
  </>
);

export default LayoutDefault;  