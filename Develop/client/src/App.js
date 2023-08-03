import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

//imported apollo packages
import { AppoloClient, InmemoryCache, ApolloProvider, createHTTpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//established new link to the graphql server at /graphql
const httpLink = createHTTpLink({
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
const client = new AppoloClient({
  link: authLink.concat(httpLink),
  cache: new InmemoryCache()
});

//established apollo provider component to make every request work with apollo client
function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Routes>
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
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
