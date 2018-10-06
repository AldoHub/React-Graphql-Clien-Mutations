import React, { Component } from 'react';

//import Apollo Modules
import ApolloClient from "apollo-boost";


//import the routes
import Nav from "./components/nav";
import Routes from "./routes";

//import Apollo Provider to connect the client
import { ApolloProvider } from "react-apollo";
import rocket from "./assets/417701-PDQC57-237.svg";

//create the ApolloClient 
//set up the config for the Apollo Client Instance  
const apolloClient = new ApolloClient({
  uri:"http://localhost:8000/graphql"
});



class App extends Component {
   
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className ="container">
       
        <header>
        
          <h1>React GraphQl Client</h1>
          <img src={rocket} />
          <Nav />
        </header>

        <Routes />

        </div>
      </ApolloProvider>
      
    );
  }
}

export default App;
