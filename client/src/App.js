import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

//imported apollo packages
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//established new link to the graphql server at /graphql
const httpLink = createHttpLink({
  uri: '/graphql'
});

//established middleware to retrieve token from local storage and set the request headers before making the graphql api request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      // if token, add to headers
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

//established new instance of apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

//established apollo provider component to make every request work with apollo client
function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
          <Route 
            path='/' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/saved' 
            element={<SavedBooks />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
