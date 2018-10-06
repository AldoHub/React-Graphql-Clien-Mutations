import React from 'react';

//import the next Apollo Server modules
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

//make the mutation
const ADD_POST = gql`
    mutation CreatePost($name: String!, $description: String! ){
        createPost(name: $name, description: $description){
            name
            description
            _id
        }
    } 

`;

const GET_POSTS = gql`
  {
    posts {
      name
      _id
      description
    }
  }
`;


const GraphQlClientMutation = () => {
    let name;
    let desc;


    return(
     <Mutation
        mutation={ADD_POST}
        update={(cache, { data: { handleSubmit } }) => {
            //CHECK THIS LINK: https://github.com/apollographql/apollo-client/issues/1701
            
            console.log(cache.data.data.ROOT_QUERY);
            if(cache.data.data.ROOT_QUERY){
                // an error or anything you want to be done
                const { posts } = cache.readQuery({ query: GET_POSTS, variables: {name: name.value, description: desc.value} });
                cache.writeQuery({
                  query: GET_POSTS,
                  data: { posts: posts.push([handleSubmit]) }
                });
            }
        }}
        
        >
        {(handleSubmit) => {
           
            return(
                
                <div>
                <form onSubmit={ e => {
                    //prevent default
                    e.preventDefault();
                  
                    handleSubmit({variables: {name: name.value, description: desc.value}});
                    name.value= "";
                    desc.value= "";
                }}>
                        <div className="form-control">
                        <label htmlFor="name">Post Title</label>
                            <input type="text" name="name" ref={node => name = node} />
                        </div>
                        <div className="form-control">
                        <label htmlFor="description">Post Description</label>
                            <textarea name="description" ref={node => desc = node}  ></textarea>
                            
                        </div>
                        
                        <input type="submit" value="Send"  />
                </form>
            </div>

            );
       }
    }     

     </Mutation>
  )
}
  
  

export default GraphQlClientMutation;
