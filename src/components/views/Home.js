import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import '../../assets/css/App.css';
import LayoutDefault from '../layout/Layout';
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
// import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        document.title ="Spartan Gym | Cross Fitness Centre"; 
        document.getElementsByTagName("META")[2].content="At Spartan Gym we are professional cross fit trainers that we take your training to the next level.";
        
        return (
            <>
                <LayoutDefault
                    className='content content-wrapper width-1700'
                    role="main"
                >
                    hi
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