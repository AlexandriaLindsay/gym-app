import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import '../../assets/css/App.css';
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
// import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        document.title ="Welcome | here is your page title to display"; 
        document.getElementsByTagName("META")[2].content="Your description about the page or site here to set dynamically";
        
        return (
            <>
                
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