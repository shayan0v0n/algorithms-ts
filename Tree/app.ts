// NODE CLASS (every node have to make here)
class SingleNode {
  // NODE STORE PROP (nodes store here)
  children: SingleNode[];
  // NODE PATENT PROP (every node has parent 'expect root node' so parent node should be here)
  parent: SingleNode | null;

  //NODE CONSTRUCTOR (this constructor get 2 paramentes, but parameter 1 is required)
  constructor(public value: string, parentNode: SingleNode | null = null) {
    // NODE STORE PROP (nodes store here)
    this.children = [];
    // NODE PATENT PROP (every node has parent 'expect root node' so parent node should be here)
    this.parent = parentNode;
  }

  //ADD SIGNLE NODE METHOD (this method get 1 paramentes, but parameter 1 is required
  // FIRST PARAM: VALUE, this method create node)
  addNode(value: string): { node: SingleNode; index: number } {
    // SINGLE NODE GENERATED (generated from current node)
    const node = new SingleNode(value, this);
    //PUSH TO CHIDLREN (here we stored a node)
    this.children.push(node);
    //RETURN NODE AND INDEX
    return { node, index: this.children.length - 1 };
  }

  //REMOVE SIGNLE NODE METHOD (this method get 1 paramentes, but parameter 1 is required
  // FIRST PARAM: VALUE, this method remove node)
  removeNode(value: string): void {
    // FILTER VALUE PARM (filter value param and return new array)
    this.children = this.children.filter((node) => node.value !== value);
  }

  findNode(
    value: string,
    type: "depth" | "breadth" = "depth"
  ): SingleNode | undefined {
    for (const item of this.children) {
      if (item.value === value) return item;

      if (type === "depth") {
        const nestedChildNode = item.findNode(value);
        if (nestedChildNode) return nestedChildNode;
      }

      if (type === "breadth") {
        for (const subItem of item.children) {
          const nestedChildNode = subItem.findNode(value);
          if (nestedChildNode) return nestedChildNode;
        }
      }
    }
  }
}

class Tree {
  root: SingleNode;

  constructor(rootValue: string) {
    this.root = new SingleNode(rootValue);
  }

  add(path: string): void {
    const splited = path.split("/");
    this.root = new Tree(splited[0]).root;
    let currentNode = this.root;
    for (let i = 1; i < splited.length; i++) {
      const { node } = currentNode.addNode(splited[i]);
      currentNode = node;
    }
  }

  remove(path: string): void {
    const splited = path.split("/");
    let currentNode = this.root;
    for (let i = 1; i < splited.length; i++) {
      currentNode.removeNode(splited[i]);
    }
  }

  toArrayChild(): void {
    console.log(this.root.children);
  }

  depthFind(value: string): SingleNode | undefined {
    if (this.root.value === value) {
      return this.root;
    }

    return this.root.findNode(value);
  }

  breadthFind(value: string): SingleNode | undefined {
    if (this.root.value === value) {
      return this.root;
    }

    return this.root.findNode(value, "breadth");
  }
}

const user = new Tree("root");

user.add("userinfo/shayan/ali/mamad/soheil");
user.remove("userinfo/ali/mamad");
console.log(user.depthFind("shayan"));
console.log(user.depthFind("soheil"));
user.toArrayChild();
