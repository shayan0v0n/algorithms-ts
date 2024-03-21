class Queue<T> {
  public items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

class Graph {
  protected adjacencyList: Map<number, number[]>;
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: number): this {
    if (!this.adjacencyList.has(vertex)) this.adjacencyList.set(vertex, []);
    return this;
  }

  addEdge(vertex1: number, vertex2: number): this {
    this.addVertex(vertex1).addVertex(vertex2);

    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
    return this;
  }

  bfs(startingVertex: number, targetVertex: number): void {
    const queue: Queue<number> = new Queue();
    const predecessor: Map<number, number> = new Map();
    const visited: Set<number> = new Set();

    queue.enqueue(startingVertex);
    visited.add(startingVertex);

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();

      if (currentVertex === targetVertex) {
        const shortestPath: number[] = [];
        let vertex = targetVertex;
        while (vertex !== startingVertex) {
          shortestPath.unshift(vertex);
          vertex = predecessor.get(vertex)!;
        }
        shortestPath.unshift(startingVertex);
        this.show(shortestPath);
        return;
      }

      const neighbors = this.adjacencyList.get(currentVertex!);
      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            predecessor.set(neighbor, currentVertex!);
            queue.enqueue(neighbor);
          }
        }
      }
    }

    console.log("No path found.");
  }

  show(graph: number[]) {
    console.log("Shortest path:", graph.join(" -> "));
  }
}

new Graph()
  .addEdge(1, 2)
  .addEdge(1, 3)
  .addEdge(3, 4)
  .addEdge(4, 5)
  .addEdge(2, 5)
  .addEdge(2, 6)
  .addEdge(6, 7)
  .bfs(1, 7);
