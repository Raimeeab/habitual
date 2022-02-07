import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// Holds global styles
import "./App.css";

// App components
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Habits from "./components/pages/Habits";
import AccountBox from "./components/pages/AccountForm";

// Construct main GraphQl API endpoint
const httpLink = createHttpLink({
    uri: "/graphql",
  // uri: "http://localhost:3001/graphql",
});

// Contrust request middleware 
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("id_token"); 
  
  // Will attach the JWT Token to every request as "authorization" header 
  return { 
    headers: { 
      ...headers, 
      authorization: token ? `Bearer ${token}` : '', 
    } 
  }; 
}); 

// Set up client to execute authLink middleware prior to GQL API request 
const client = new ApolloClient({
  link: authLink.concat(httpLink), 
  cache: new InMemoryCache(), 
}); 

function App() {
  return (
    // TODO: Before deployment add
    //       basename="Habitual" in <Router>
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/habits" element={<Habits />} />
          <Route path="/login" element={<AccountBox />} />
        </Routes>
      </Router>
    </ApolloProvider >
  );
}

export default App;
