import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
import Hero from '../../assets/images/guy-working-out.jpg'
import Image from '../elements/Image';

class About extends Component {
    render() {
        document.title ="Hy | here is your page title to display"; 
        document.getElementsByTagName("META")[2].content="dYour description about the page or site here to set dynamically";
        
        return (
            <>
                <LayoutDefault>
                    <div className="sub-hero">
                        <Image width="100%" src={Hero} alt="Guy Working Out" />
                        <h1 style={{ textTransform: 'uppercase' }} className="threeD">About Us</h1>
                    </div>
                </LayoutDefault>
            </>
        );
    }
  
}
export default hot(About);