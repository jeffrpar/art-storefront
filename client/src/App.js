import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

// Set up Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

// GraphQL query to get the message
const GET_MESSAGE = gql`
  query GetMessage {
    message
  }
`;

function Message() {
  const { loading, error, data } = useQuery(GET_MESSAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return <h1>{data.message}</h1>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Message />
      </div>
    </ApolloProvider>
  );
}

export default App;
