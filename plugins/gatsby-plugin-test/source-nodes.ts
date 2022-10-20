const products = [
  {
    id: "product_1",
    imageUrl: "https://images.unsplash.com/photo-1665081661649-8656335a6cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    items: [
      {
        id: 'item_1',
        imageUrl: "https://images.unsplash.com/photo-1666120565124-7e763880444a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
    ]
  }
]

const sourceNodes = async ({ actions, createNodeId, createContentDigest }, options) => {
  
  products.forEach((testNode) => {
    const node = {
      ...testNode,
      id: createNodeId(`Product-${testNode.id}`),
    }

    actions.createNode({
      ...node,
      internal: {
        type: 'Product',
        contentDigest: createContentDigest(node),
      },
    });

    testNode.items.forEach(item => {

      const itemNode = {
        ...item,
        id: createNodeId(`Item-${item.id}`),
      }
  
      actions.createNode({
        ...itemNode,
        parent: node.id,
        internal: {
          type: 'Item',
          contentDigest: createContentDigest(itemNode),
        },
      });

    })
  })
};

module.exports = sourceNodes;