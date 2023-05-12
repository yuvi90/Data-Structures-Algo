/*
    Adjacency List using array list.
*/

class Edge {
    constructor(src, des, weight = null) {
        this.src = src;
        this.des = des;
        this.weight = weight;
    }
}

class Graph {
    // Each index represents as vertices or nodes of graph
    constructor(size) {
        this.nodes = new Array(size);
        for (let i = 0; i < size; i++) {
            this.nodes[i] = new Array();
        }
    }

    //Add Edge
    addEdge(src, des, weight) {
        const e = new Edge(src, des, weight);
        this.nodes[src].push(e);
    }

    // Print Neighbors of Given Node
    showNeighbors(node) {
        for (let i = 0; i < this.nodes[node].length; i++) {
            let e = this.nodes[node][i];
            console.log(`${node} => ${e.des} and cost is ${e.weight}`);
        }
    }

    bfs(start) {
        let queue = [start];
        let visited = new Array(this.nodes.length);
        for (let i = 0; i < visited.length; i++) {
            visited[i] = false;
        }

        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (!visited[currentNode]) {
                console.log(currentNode)
                visited[currentNode] = true;
                for (let i = 0; i < this.nodes[currentNode].length; i++) {
                    let e = this.nodes[currentNode][i];
                    queue.push(e.des);
                }
            }
        }
    }

    // BFS For Disconnected Graphs
    disConnectedBFS(start, visited) {
        let queue = [start];

        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (!visited[currentNode]) {
                console.log(currentNode)
                visited[currentNode] = true;
                for (let i = 0; i < this.nodes[currentNode].length; i++) {
                    let e = this.nodes[currentNode][i];
                    queue.push(e.des);
                }
            }
        }
    }
}

const graph1 = new Graph(4);

graph1.addEdge(0, 2, 2);
graph1.addEdge(1, 2, 4);
graph1.addEdge(1, 3, 3);
graph1.addEdge(2, 3, 5);
graph1.addEdge(2, 1, 2);
graph1.addEdge(2, 0, 3);
graph1.addEdge(3, 1, 1);
graph1.addEdge(3, 2, 4);

const graph2 = new Graph(7);

graph2.addEdge(0, 1);
graph2.addEdge(0, 2);
graph2.addEdge(1, 0);
graph2.addEdge(1, 3);
graph2.addEdge(2, 0);
graph2.addEdge(2, 4);
graph2.addEdge(3, 1);
graph2.addEdge(3, 4);
graph2.addEdge(3, 5);
graph2.addEdge(4, 2);
graph2.addEdge(4, 3);
graph2.addEdge(4, 5);
graph2.addEdge(5, 3);
graph2.addEdge(5, 4);
graph2.addEdge(5, 6);
graph2.addEdge(6, 5);

/*
    Disconnected Graph
    
    0----1----2
    
        3----4

*/

const graph3 = new Graph(5);

graph3.addEdge(0, 1);
graph3.addEdge(1, 0);
graph3.addEdge(1, 2);
graph3.addEdge(2, 1);
graph3.addEdge(3, 4);
graph3.addEdge(4, 3);

// For visiting disconnected graphs
let visited = new Array(graph3.nodes.length);
for (let i = 0; i < visited.length; i++) {
    visited[i] = false;
}
// Traversing BFS Graph
for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
        graph3.disConnectedBFS(i, visited);
    }
}