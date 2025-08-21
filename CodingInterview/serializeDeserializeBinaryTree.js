class Node {
  constructor(val) {
    this.value = val;     // the value stored in this node
    this.left = null;   // reference to left child
    this.right = null;  // reference to right child
  }
}

function serialize(root){
    if(!root){
        return "null";
    }
    const left = serialize(root.left);
    const right = serialize(root.right);

    return `${root.value},${left},${right}`;
}

function deserialize(str){
    const values = str.split(',');
    const queue = values.reverse(); // reverse cuz pop will pull item from the right side of the array

    return buildTree(queue);

    function buildTree(queue){
        const val = queue.pop();
        if(val === "null"){
            return null;
        }
        const node = new Node(parseInt(val));
        node.left = buildTree(queue);
        node.right = buildTree(queue);

        return node;
    }
}


// Create a binary tree
//       1
//      / \
//     2   3
//        / \
//       4   5

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

// Serialize
const serialized = serialize(root);
console.log("Serialized Tree:", serialized);
// Example output: "1,2,null,null,3,4,null,null,5,null,null"

// Deserialize
const deserialized = deserialize(serialized);
console.log("Deserialized Root:", deserialized);
console.log("Root Value:", deserialized.value);       // 1
console.log("Left Child:", deserialized.left.value);  // 2
console.log("Right Child:", deserialized.right.value); // 3
