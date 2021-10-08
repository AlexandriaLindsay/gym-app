import { hot } from 'react-hot-loader/root';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Header from './components/layout/partials/Header';
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/css/App.css';
import Home from './components/views/Home.js';
import MenuModal from './components/elements/MenuModal';
import Nav from './components/layout/partials/Nav';
import Footer from './components/layout/partials/Footer';
import Contact from './components/views/Contact';
import ScrollToTop from './components/elements/ScrollToTop';

const client = new ApolloClient({ uri: 'https://charlie.staging.prufs.ca/graphql' });


function App() {
 
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          {/* HEADER */}
          <Header ID="main-header" />
          <ScrollToTop/>
          {/* CONTENT */}
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          {/* FOOTER */}
          <Footer />
          {/* MODAL MENU */}
          <MenuModal>
            <Nav className="overlay-menu" />
          </MenuModal>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default hot(App);
