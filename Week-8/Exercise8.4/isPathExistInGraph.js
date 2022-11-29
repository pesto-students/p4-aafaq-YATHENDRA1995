const dfsImp = (vertices, edges, source, destination) => {

  const graph = Array(vertices).fill(0).map(() => Array())

  edges.forEach(edge => {
    let parent = edge[0], child = edge[1]
    graph[parent].push(child)
    graph[child].push(parent)
  })

  let discovered = Array(vertices).fill(false)

  const result = dfs(graph, source, discovered)

  if (result[destination]) {
    console.log('Path Exists')
  } else {
    console.log('Path does not exist')
  }
  
}

const dfs = (graph, v, discovered) => {

  discovered[v] = true
  for (let u of graph[v]) {
    if (discovered[u] === false) {
      dfs(graph, u , discovered)
    }
  }
  return discovered 
  
}


dfsImp(3, [
  [0, 1],
  [1, 2],
  [2, 0]
], 0, 2)

dfsImp(6, [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3]
], 0, 5)

/**
 * Time Complexity - O( V + E ) (Because traversing through all vertices an edges)
 * Space Complexity - O( V + E ) (Because we are creating a Adjacency list)
 */