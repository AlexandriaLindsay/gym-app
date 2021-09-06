import { hot } from 'react-hot-loader/root';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/App.css';
import Home from './components/views/Home.js';

const client = new ApolloClient({ uri: 'https://diamondconstruction.ca/graphql' });

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default hot(App);
