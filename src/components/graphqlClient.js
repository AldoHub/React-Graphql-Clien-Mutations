import React from 'react';

//import the next Apollo Server modules
import gql from "graphql-tag";
import { Query } from "react-apollo";


//build the query
const GET_POSTS = gql`
  {
    posts {
      name
      _id
      description
    }
  }
`;




const GraphQlClient = () => (
  
  <Query query={GET_POSTS}> 
  {
    ({loading, error, data}) => {
      
      if(loading) return "Posts are being retrieved, wait...";
      if(error) return `Error: ${error.message}`;
      return(
        <div className="postsContainer">
        <h2>All Posts</h2>
          {data.posts.map(post => (
            <div className="post" key={post._id}>
              <h4>{post.name}</h4>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      )
    
    }
  }
  </Query>

);
export default GraphQlClient;
