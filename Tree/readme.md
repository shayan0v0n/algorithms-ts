This is an application that represents a tree data structure. The tree is composed of nodes, where each node can have multiple children nodes and a parent node (except for the root node).

The main classes in this application are `SingleNode` and `Tree`.

The `SingleNode` class represents a single node in the tree. It has the following properties:

- `value`: A string value that represents the content of the node.
- `children`: An array of `SingleNode` objects, representing the children nodes of the current node.
- `parent`: A reference to the parent `SingleNode` object, or `null` if the node is the root node.

The `SingleNode` class also has several methods:

- `constructor`: Initializes a new instance of the `SingleNode` class. It takes the `value` parameter as the required value of the node and an optional `parentNode` parameter which sets the parent node of the current node.
- `addNode`: Creates a new child node with the given `value` and adds it to the current node's children array. It returns an object containing the newly created `node` and its `index` within the children array.
- `removeNode`: Removes a child node with the given `value` from the current node's children array.
- `findNode`: Searches for a node with the given `value` within the subtree rooted at the current node. It can perform the search in either "depth-first" (`type` parameter set to "depth") or "breadth-first" (`type` parameter set to "breadth") manner. It returns the found `SingleNode` object or `undefined` if the node is not found.

The `Tree` class represents the entire tree and provides operations to manipulate the tree. It has the following properties and methods:

- `root`: The root node of the tree.
- `constructor`: Initializes a new instance of the `Tree` class with the given `rootValue`. It creates a new root node with the provided value.
- `add`: Adds a new path to the tree. The `path` parameter is a string representing the path to be added, where each level in the path is separated by a "/". It splits the path, traverses the tree from the root, and creates new nodes along the path if they don't exist.
- `remove`: Removes a path from the tree. The `path` parameter is a string representing the path to be removed. It splits the path, traverses the tree from the root, and removes the corresponding nodes along the path.
- `toArrayChild`: Prints the children of the root node as an array.
- `depthFind`: Finds a node with the given `value` in the tree using depth-first search starting from the root node. It returns the found `SingleNode` object or `undefined` if the node is not found.
- `breadthFind`: Finds a node with the given `value` in the tree using breadth-first search starting from the root node. It returns the found `SingleNode` object or `undefined` if the node is not found.

In the provided code sample, an instance of the `Tree` class named `user` is created with the root value "root". The code demonstrates adding a path "userinfo/shayan/ali/mamad/soheil" to the tree, removing the path "userinfo/ali/mamad" from the tree, and performing node searches using both depth-first and breadth-first methods. Finally, it prints the children of the root node.
