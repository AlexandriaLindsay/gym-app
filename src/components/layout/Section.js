import React from 'react';


const Section = ({ 
    children,
    className,
    id,
    role,
    ...props 
}) => (
  <>
    <section
        {...props}
        id={id}
        className={className}
        role={role}
    >
        {children}
    </section>
  </>
);

export default Section;  