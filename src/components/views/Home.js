import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
import Image from '../elements/Image'
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import DoubleCol from '../layout/DoubleCol';
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
// import { Link } from 'react-router-dom';

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



class Home extends Component {
    render() {
        document.title ="Spartan Gym | Cross Fitness Centre"; 
        document.getElementsByTagName("META")[2].content="At Spartan Gym we are professional cross fit trainers that we take your training to the next level.";
        
        return (
            <>
                <LayoutDefault
                    className='content content-wrapper width-1500'
                    role="main"
                >
                    <div className='hero'>
                        <div className='hero-content'>
                            <p>Find out if you can</p>
                            <h1 style={{ textTransform: 'uppercase' }}>Su<br />rvi<br />ve</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor.</p>
                            <div className='social'>
                                <Image src={Social} title='See us on Social Media' alt='See us on Social Media' />
                            </div>
                            <Image className='arrow-graphic' src={Arrow} alt='Arrow Icon' />
                        </div>

                        <div className='hero-img'>
                            <Image src={Hero} alt='Weights in the Spartan Gym' />
                        </div>
                    </div>

                    <Section id='membership'>
                        <DoubleCol>
                            <DoubleCol>
                                <div className='grad'></div>
                                <Image src={MemberImage} alt='Man Showing His Abs' />
                                <div className='membership-content'>
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </DoubleCol>

                            <DoubleCol>
                                <div className='grad'></div>
                                <Image src={MemberImage2} alt='Woman Working Out' />
                                <div className='membership-content'>
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </DoubleCol>

                            <DoubleCol>
                                <div className='grad'></div>
                                <Image src={MemberImage3} alt='Steel Weights' />
                                <div className='membership-content'>
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </DoubleCol>

                            <DoubleCol>
                                <div className='grad'></div>
                                <Image src={MemberImage4} alt='Fitness Equipment' />
                                <div className='membership-content'>
                                    <h3>12-Month Plan</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </DoubleCol>
                        </DoubleCol>

                        <DoubleCol>
                            <h2>Membership Plans</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <Link style={{ textTransform: 'uppercase' }} to='/about-us' className='custom-btn'>Sign Up</Link>
                            <Image className='arrow-graphic' src={Arrow} alt='Arrow Icon' />
                        </DoubleCol>

                    </Section>

                    <Section className='completed-challenges'>
                        <DoubleCol>
                            <p style={{ textTransform: 'uppercase' }}>Completed Challenges</p>
                            <h1>13</h1>
                            <h2>You have <span>78%</span> chance for success</h2>
                            <Link style={{ textTransform: 'uppercase' }} to='/about-us' className='custom-btn'>See More</Link>
                        </DoubleCol>

                        <DoubleCol>
                            <Image src={results} alt='Man Bench Dead Lifting' />
                        </DoubleCol>
                    </Section>
                </LayoutDefault>
                
                {/* <Query query={gql`
                    {
                        pages {
                            edges {
                                node {
                                    title
                                    slug
                                }
                            }
                        }
                    }
                `
    
                }>
                    {
                        ({ loading, error, data }) => {
                            if( loading ) {
                                return(<h1>Loading...</h1>)
                            }
    
                            return(
                                <div>
                                    {
                                        data.pages.edges.map((page, key) => {
                                            return(
                                                <div key={key}>
                                                    <h2>{page.node.title}</h2>
                                                    <Link to={page.node.slug}>Read More</Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    }
    
                </Query> */}
            </>
        );
    }
}

export default hot(Home);