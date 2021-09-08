import { hot } from 'react-hot-loader/root';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Header from './components/layout/partials/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/App.css';
import Home from './components/views/Home.js';
import MenuModal from './components/elements/MenuModal';
import Nav from './components/layout/partials/Nav';
import Footer from './components/layout/partials/Footer';
import useScript from './assets/customHooks/UseEffect';

const client = new ApolloClient({ uri: 'https://diamondconstruction.ca/graphql' });

function App() {
  
  useScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
  
 
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          {/* HEADER */}
          <Header />
          {/* CONTENT */}
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
          {/* FOOTER */}
          <Footer />
          {/* MODAL MENU */}
          <MenuModal>
            <Nav />
          </MenuModal>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default hot(App);
