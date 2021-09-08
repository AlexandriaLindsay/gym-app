import React from "react";


const Footer = ({
    ID,
    ...props
}) => {
    return(
        <>
            <footer
                {...props}
                id='footer'
            >
                </footer>
        </>
    );
}

export default Footer;