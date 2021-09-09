import React, { Component } from 'react'
import '../../assets/css/App.css';

class About extends Component {
    render() {
        document.title ="Hy | here is your page title to display"; 
        document.getElementsByTagName("META")[2].content="dYour description about the page or site here to set dynamically";
        
        return (
            <>
                <div>About Page</div>
            </>
        );
    }
  
}
export default About;