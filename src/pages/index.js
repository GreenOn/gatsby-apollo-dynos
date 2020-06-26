import React from 'react';
import { graphql } from 'gatsby';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// This query is executed at build time by Gatsby.
export const GATSBY_QUERY = graphql`
{
    dynos{
      dynoes(where: {owner: {email: "dynosapp@gmail.com"}, dynoType: {name: "Reading"}, accessType: PUBLIC}) {
        id
        dynoTitle
        description
        thumbnailUrl
        updatedAt
        owner {
          email
        }
      }
    }
  }  
`
// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
{
    dynos{
      dynoes(where: {owner: {email: "dynosapp@gmail.com"}, dynoType: {name: "Reading"}, accessType: PUBLIC}) {
        id
        dynoTitle
        description
        thumbnailUrl
        updatedAt
        owner {
          email
        }
      }
    }
  }  
`
const Blog = ({data: {
  dynos: {dynoes}
}}) => {
  return(
      <div>
          <h3>Read what’s new at Dynos</h3>
              {dynoes && dynoes.map(({id,dynoTitle,description,thumbnailUrl,updatedAt}) => 
                  <p>
                    key={id} id={id} title={dynoTitle} image={thumbnailUrl} date={updatedAt} description={description}
                  </p>
              )}
          </div>
  )
}
export default Blog