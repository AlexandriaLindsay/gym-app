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


class Contact extends Component {
    render() {
        document.title ="Contact — here is your page title to display"; 
        document.getElementsByTagName("META")[2].content="dYour description Contact the page or site here to set dynamically";
       
        document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '37' == event.detail.contactFormId ) {
            document.getElementById('success-message').innerHTML = '<p>Message Sent! We\'ll be in touch soon!</p>';
        }
       }, false );
        return (
            <>
                <LayoutDefault>
                    <div className="sub-hero">
                        <Image width="100%" src={Hero} alt="Guy Working Out" />
                        <h1 style={{ textTransform: 'uppercase' }} className="threeD">Contact Us</h1>
                    </div>

                    <Section>
                        <DoubleCol>
                            <h2>Mission</h2>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            <Link className="custom-btn" to="/">FIND OUT MORE</Link>
                        </DoubleCol>

                        <DoubleCol>
                            <form action="https://charlie.staging.prufs.ca/wp-json/contact-form-7/v1/contact-forms/37/feedback" method="POST">
                                <input type="text" name="your-name" placeholder="First Name" required />
                                <input type="email" name="your-email" placeholder="Email" required />
                                <textarea name="your-message" placeholder="Message" required />
                                <input type="submit" value="SEND" />
                            </form>
                            <div id="success-message"></div>
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