module.exports = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Product implements Node {
      id: String!
      imageUrl: String!
      featuredImg: File @link(from: "fields.localFile")
      items: [Item]
    }

    type Item implements Node {
      id: String!
      imageUrl: String!
      featuredImg: File @link(from: "fields.localFile")
    }
  `;
  createTypes(typeDefs);
};