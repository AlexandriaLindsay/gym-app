import React, { Component } from 'react'
import '../../assets/css/App.css';

class Contact extends Component {
    render() {
        document.title ="Hy | here is your page title to display"; 
        document.getElementsByTagName("META")[2].content="dYour description Contact the page or site here to set dynamically";
        
        return (
            <>
                <div>Contact Page</div>
            </>
        );
    }
  
}
export default Contact