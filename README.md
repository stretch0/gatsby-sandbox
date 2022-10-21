### steps to reproduce

1) `npm run clean && npm run start`
2) visit: http://localhost:8000/__graphql
3) run the following query:
```graphql
query MyQuery {
  item {
    featuredImg {
        childImageSharp {
      gatsbyImageData
    }
  }
  product {
    id
    featuredImg {
      childImageSharp {
        gatsbyImageData
      }
    }
    items {
      id
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
```
4) Notice `product.items[i].featuredImage` is null. This should return the same image data that is returned on `item.featuredImg`.
