const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers from the schema
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');


// established the middleware for app to be express and localhost:3001
const app = express();
const PORT = process.env.PORT || 3001;


//created a new Apollo server and passed in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


//created a function to initiate the server, passed in our schema info and vairable app which is express
const startServer = async ( typeDefs, resolvers ) => {
  await server.start();
  server.applyMiddleware({ app });
}


//established a connection to the database and server
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});

//called the function to start the server
startServer(typeDefs, resolvers);
