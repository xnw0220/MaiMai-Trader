import { gql } from 'apollo-boost'

export const category = gql`
  query {
    category {
      name
      id
      image
    }
  }
`

export const createProduct = gql`
  mutation CreatePost($title: String, $description: String){
    createPost(post: {title: $title, description: $description, expiryTime:"2020-03-15T00:48:09Z"})
  }
`