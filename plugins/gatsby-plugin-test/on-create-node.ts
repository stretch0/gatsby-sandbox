// guide used for creating remote file nodes:
// https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

const onCreateNode = async ({ node, cache, store, getCache, actions: { createNode, createNodeField }, createNodeId }) => {  
  
  if( node.internal.type === 'Item') {
    
    const fileNode = await createRemoteFileNode({
      url: node.imageUrl,
      parentNodeId: node.parent,
      createNode,
      createNodeId,
      getCache,
    })

    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
  
  if( node.internal.type === 'Product') {
    
    const fileNode = await createRemoteFileNode({
      url: node.imageUrl,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    })

    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
};

module.exports = onCreateNode