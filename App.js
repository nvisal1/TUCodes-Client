import { ApolloProvider } from 'react-apollo';
import ApolloClient from './api/ApolloClient';
import HomeApp from './HomeApp';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
        <ApolloProvider client={ApolloClient}>
          <HomeApp />
        </ApolloProvider>
    );
  }
}
