import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
import Image from '../elements/Image';
import Section from '../layout/Section';
import DoubleCol from '../layout/DoubleCol';
import { Link } from 'react-router-dom';

/***************************
 * IMAGES
 **************************/
import Hero from '../../assets/images/guy-working-out.jpg'
import { ContactUs } from '../elements/ContactUs';

class Contact extends Component {
    render() {
        document.title ="Contact — here is your page title to display"; 
        document.getElementsByTagName("META")[2].content="dYour description Contact the page or site here to set dynamically";
       
        return (
            <>
                <LayoutDefault>
                    <div className="sub-hero">
                        <Image width="100%" src={Hero} alt="Guy Working Out" />
                        <h1 style={{ textTransform: 'uppercase' }} className="threeD">Contact Us</h1>
                    </div>

                    <Section className="contact">
                        <DoubleCol>
                            <h2>Mission</h2>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            <Link className="custom-btn" to="/">FIND OUT MORE</Link>
                        </DoubleCol>

                        <DoubleCol>
                            <ContactUs />
                        </DoubleCol>
                    </Section>

                    <Section>
                        
                    </Section>
                </LayoutDefault>
            </>
        );
    }
  
}
export default hot(Contact);