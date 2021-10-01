import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
import Image from '../elements/Image';
import Section from '../layout/Section';
import DoubleCol from '../layout/DoubleCol';
import { Link } from 'react-router-dom';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

/***************************
 * IMAGES
 **************************/
import Hero from '../../assets/images/guy-working-out.jpg'
import { ContactUs } from '../elements/ContactUs';


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
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            name='user_email'
                            placeholder='Email…'
                            required
                            icon='mail'
                            iconPosition='left'
                            />
                            <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Name'
                            name='user_name'
                            placeholder='Name…'
                            required
                            icon='user circle'
                            iconPosition='left'
                            />
                            <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Message'
                            name='user_message'
                            placeholder='Message…'
                            required
                            />
                            <Button type='submit' color='green'>Submit</Button>
                        </Form>
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