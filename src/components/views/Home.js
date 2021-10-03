import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
import Image from '../elements/Image'
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import DoubleCol from '../layout/DoubleCol';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import DOMPurify from 'dompurify';
// import { Link } from 'react-router-dom';
import "animate.css"

/*****************************************
 * IMAGES
 *****************************************/
import Hero from '../../assets/images/weights-in-gym.jpg';
import Social from '../../assets/images/social.svg';
import MemberImage from '../../assets/images/guy-with-abs.jpg';
import MemberImage2 from '../../assets/images/woman-working-out.jpg';
import MemberImage3 from '../../assets/images/steel-weights.jpg';
import MemberImage4 from '../../assets/images/fitness-equipment.jpg';
import results from '../../assets/images/results.jpg';
import Arrow from '../../assets/images/arrow-graphic.svg';
import session1 from '../../assets/images/cross-fit.jpg';
import session2 from '../../assets/images/yoga-class.jpg';
import session3 from '../../assets/images/ropes.jpg';
import deadLift from '../../assets/images/man-doing-dead-lifts.jpg';



class Home extends Component {
    render() {
        document.title ="Spartan Gym — Cross Fitness Centre"; 
        document.getElementsByTagName("META")[2].content="At Spartan Gym we are professional cross fit trainers that we take your training to the next level.";
        
        // SANITIZE HTML DATA
        var sanitizer = DOMPurify.sanitize;
        
        return (
            <>
                <LayoutDefault
                    className="content content-wrapper width-1500"
                    role="main"
                >
                    <div className="hero">
                        <div className="hero-content animate__animated animate__fadeInLeft animate__slow">
                            <p className="side">Find out if you can</p>
                            <h1 style={{ textTransform: 'uppercase' }}>Su<br />rvi<br />ve</h1>
                            <div className="hero-san">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor.</p>
                            </div>
                            {/* START INTRO QUERY */}
                            {/* <Query query={gql`
                                {
                                    pages {
                                        edges {
                                            node {
                                                content
                                                  home {
                                                  intro
                                                }
                                            }
                                        }
                                    }
                                }
                            `
                
                            }>
                                {
                                    ({ loading, error, data }) => {
                                        if (loading) return '';
                                        if (error) return `Error! ${error.message}`;
                
                                        return(
                                            <>
                                                {
                                                    data.pages.edges.map((page, key) => {
                                                        return(
                                                            <div key={key}>
                                                            <div className="hero-san" dangerouslySetInnerHTML={{__html: sanitizer(page.node.home.intro)}} />                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    }
                                }
                
                            </Query> */}
                            {/* END INTRO QUERY */}

                            <div className="social">
                                <Image src={Social} title="See us on Social Media" alt="See us on Social Media" />
                            </div>

                            <Image className="arrow-graphic" src={Arrow} alt="Arrow Icon" />
                        </div>

                        <div className="hero-img animate__animated animate__fadeInRightBig animate__slow">
                            <Image src={Hero} alt="Weights in the Spartan Gym" />
                        </div>
                    </div>

                    <Section id="membership">
                        <DoubleCol>
                            <div className="doubleCol animate__animated animate__fadeInTopLeft">
                                <div className="grad"></div>
                                <Image src={MemberImage} alt="Man Showing His Abs" />
                                <div className="membership-content">
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </div>

                            <div className="doubleCol animate__animated animate__fadeInTopRight">
                                <div className="grad"></div>
                                <Image src={MemberImage2} alt="Woman Working Out" />
                                <div className="membership-content">
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </div>

                            <div className="doubleCol animate__animated animate__fadeInBottomLeft">
                                <div className="grad"></div>
                                <Image src={MemberImage3} alt="Steel Weights" />
                                <div className="membership-content">
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </div>

                            <div className="doubleCol animate__animated animate__fadeInBottomRight">
                                <div className="grad"></div>
                                <Image src={MemberImage4} alt="Fitness Equipment" />
                                <div className="membership-content">
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </div>
                        </DoubleCol>

                        <div className="doubleCol animate__animated animate__fadeInRight animate__delay-1s">
                            <h2>Membership Plans</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <Link style={{ textTransform: 'uppercase' }} to="/about-us" className="custom-btn">Sign Up</Link>
                            <Image className="arrow-graphic" src={Arrow} alt="Arrow Icon" />
                        </div>

                    </Section>

                    <Section className="completed-challenges">
                        <DoubleCol>
                            <p style={{ textTransform: 'uppercase' }}>Completed Challenges</p>
                            <h1>13</h1>
                            <h2>You have <span>78%</span> chance for success</h2>
                            <Link style={{ textTransform: 'uppercase' }} to="/about-us" className="custom-btn">See More</Link>
                        </DoubleCol>

                        <DoubleCol>
                            <Image src={results} alt="Man Bench Dead Lifting" />
                        </DoubleCol>
                    </Section>

                    <Section id="sessions" className="popular-sessions">
                        <h2>Popular Sessions</h2>

                        <div className="session-block">
                            <DoubleCol>
                                <Image src={session1} alt="Rope Training" />
                            </DoubleCol>

                            <DoubleCol>
                                <h3 style={{ textTransform: 'uppercase' }}>Key Skills</h3>
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <Link className="custom-btn" to="#">FIND OUT MORE</Link>
                            </DoubleCol>
                        </div>

                        <div className="session-block">
                            <DoubleCol>
                                <Image src={session2} alt="Yogo Class" />
                            </DoubleCol>

                            <DoubleCol>
                                <h3 style={{ textTransform: 'uppercase' }}>Key Skills</h3>
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <Link className="custom-btn" to="#">FIND OUT MORE</Link>
                            </DoubleCol>
                        </div>

                        <div className="session-block">
                            <DoubleCol>
                                <Image src={session3} alt="Rope Training" />
                            </DoubleCol>

                            <DoubleCol>
                                <h3 style={{ textTransform: 'uppercase' }}>Key Skills</h3>
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <Link className="custom-btn" to="#">FIND OUT MORE</Link>
                            </DoubleCol>
                        </div>
                    </Section>

                    <Section className="advice">
                        <h1>ADVICE</h1>
                        <div className="advice-img">
                            <div>
                                <h2>Survival Mode</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            </div>
                            <Image width="100%" src={deadLift} alt="Man Dead Lifting" />
                        </div>
                    </Section>

                </LayoutDefault>
                
            </>
        );
    }
}

export default hot(Home);