import classNames from "classnames";
import React from "react";

const MenuModal = ({
    children,
    className,
    ID,
    ...props
}) => {

    const classes = classNames(
        'overlay',
        className,
    );

    return(
        <>
            <div
                {...props}
                className={classes}
                id={ID}
            >
                {children}
            </div>
        </>
    );
    
}

export default MenuModal;