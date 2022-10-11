// guide used for creating remote file nodes:
// https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

const onCreateNode = async ({ node, cache, store, getCache, actions: { createNode, createNodeField }, createNodeId }) => {  

  if( node.internal.type === 'myNode') {
    
    // const myNode = await createRemoteFileNode({
    //   url: node.imageUrl,
    //   parentNodeId: node.id,
    //   createNode,
    //   createNodeId,
    //   cache,
    //   store,
    // });

    // if (myNode) {
    //   myNode.imageData___NODE = myNode.id;
    // }
    
    const fileNode = await createRemoteFileNode({
      url: node.imageUrl,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    })

    if (fileNode) {
      createNodeField({ node, name: "imageData", value: fileNode.id })
    }
  }
};

module.exports = onCreateNode