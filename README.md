# Book-Search

## Technologies
---
[![made-with-javascript](https://img.shields.io/badge/Made%20with-HTML-1f425f.svg)](https://www.javascript.com)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-Bootstrap-1f425f.svg)](https://www.javascript.com)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://www.javascript.com)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-MongoDB-1f425f.svg)](https://www.javascript.com)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)](https://www.javascript.com)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-Express.js-1f425f.svg)](http://expressjs.com/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-Handle.js-1f425f.svg)](https://handlebarsjs.com/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-GraphQL-1f425f.svg)](https://graphql.org/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-CSS-1f425f.svg)](https://www.javascript.com)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)


## Description
This is a  full stack application thaat allows users to search for books and save them to their profile. This application uses the Google Books API to search for books and save them to a MongoDB database. This application was built using the MERN stack and uses GraphQL to query the database.
---

## Features
---

Descripiton of code snippet below
```
code snippet of client side graphql query for get me which is used to get the user information
```
```
export const GET_ME = gql`

query me {
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}

`;

---

## Deployment Link
---
- [Book-Search-Link]()
---

## Table of contents
---
- [Installation](#installation)
- [Sources](#sources)
- [Credits](#credits)
- [License](#license)

---

## Installation
---

Below is the following installing steps to install and run this app.

1. Clone this repo. First cd into the folder where you would like to save this project. Then enter the command below.

```sh
https://github.com/kaleikautakaoka/Book-Search.git
```

3. Run this command below to seed the data base. You will find this configuration in the package.json file provided in the repo.

```sh
npm run seed
```

4. Start the server by running the code below. This is convienent as it will be using nodemon.

```sh
npm start
```

5. 
http://localhost:3001
```
## Sources
---
- [aloi](https://aloiroberto.medium.com/creating-a-mern-stack-app-from-scratch-7294e748d8d0)
- [nodesource](https://nodesource.com/)
- [medium](https://medium.com/the-javascript)
- [react](https://reactjs.org/docs/getting-started.html)
- [stackoverflow](https://stackoverflow.com/)
- [digitalocean](https://www.digitalocean.com/community/tutorials/)
- [eslint](https://www.npmjs.com/package/eslint-plugin-prettier)
-[graphql](https://graphql.org/)
- [apollo](https://www.apollographql.com/docs/)
- [mongoose](https://mongoosejs.com/docs/)

## Credits
---
DU Bootcamp Cirruculm
Tutor: Andres Jimenez

## License
---
MIT
