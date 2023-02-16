exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const { data } = await graphql(`
      query MyQuery {
        allMongodbJpbelleyFragments(limit: 3) {
          totalCount
          edges {
            node {
              id
              slug
              name
              code
            }
          }
        }
      }
  `)

  data.allMongodbJpbelleyFragments.edges.forEach(edge => {

    const slug = `fragment/${edge.node.slug}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/fragment.js`),
      context: { 
        slug: slug,
        fragment: edge.node,
      },
    })
  })
}
