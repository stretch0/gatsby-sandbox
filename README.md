### steps to reproduce

1) ```sh npm run clean && npm run start```
2) visit: http://localhost:8000/__graphql
3) run the following query:
```graphql
query Query {
  myNode {
    imageUrl
    imageData {
			childImageSharp {
				gatsbyImageData
      }
    }
    
  }
}
```
4) Notice `imageData` is returning null when it should return an optimised version of the remote image from unsplash