const testNodes = [
  {
    name: "My Node 1",
    imageUrl: "https://images.unsplash.com/photo-1665081661649-8656335a6cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
  }
]

const sourceNodes = async ({ actions, createNodeId, createContentDigest }, options) => {

  testNodes.forEach((testNode) => {
    const node = {
      ...testNode,
      id: createNodeId(`myNode-${testNode.name}`),
    }

    actions.createNode({
      ...node,
      internal: {
        type: 'myNode',
        contentDigest: createContentDigest(node),
      },
    });
  })
};

module.exports = sourceNodes;