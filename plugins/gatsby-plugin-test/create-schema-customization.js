module.exports = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type myNode implements Node {
      id: String!
      name: String!
      imageUrl: String!
      imageData: File @link(from: "myNodeImageData___NODE")
    }
  `;
  createTypes(typeDefs);
};