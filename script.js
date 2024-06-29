//merge sort algorithm

function mergeSortRecursive(arr1) {
  if (arr1.length < 2) {
    return arr1; 
  }
  const mid = Math.floor(arr1.length / 2);
  const leftArr = arr1.slice(0, mid);
  const rightArr = arr1.slice(mid);
  const sortedLeft = mergeSortRecursive(leftArr);
  const sortedRight = mergeSortRecursive(rightArr);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const sortedArr = [];


  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right]
}


const arr1 = [1, 7, 8, 2, 9, 5, 3, 4];


console.log(mergeSortRecursive(arr1));

//linked list

class LinkList {
  constructor(list = null) {
    this.list = list;
  }
  append(value) {
    if (this.list == null) {
      const newNode = new Node(value);
      this.list = newNode;
    } else if (this.list !== null) {
      let current = this.list;

      while (current.next !== null) {
        current = current.next;
      }
      const newNode = new Node(value);
      current.next = newNode;
    }
  }

  prepend(value) {
    if (this.list == null) {
      const newNode = new Node(value);
      this.list = newNode;
    } else if (this.list !== null) {
      let current = this.list;

      const newNode = new Node(value);
      this.list = newNode;

      newNode.next = current;
    }
  }

  size() {
    let current = this.list;
    let len = 1;

    if (current !== null) {

      while (current.next !== null) {
        current = current.next;
        len++
      }
    } else if (current == null) {
      len = 0;
    }

    console.log(`length is: ${len}`)
  }

  head() {
    let current = this.list;
    console.log(`the first value is ${current.value}`)

    if (current == null) {
      console.log(`the linked list is empty`);
    }
  }

  tail() {
    let current = this.list;

    while (current.next !== null) {
      current = current.next;
    }
    console.log(`the last value is ${current.value}`)

    if (current == null) {
      console.log(`the linked list is empty`)
    }
  }

  at(index) {
    let current = this.list;
    let len = 1;

    if (current !== null) {
      if (index == 1) {
        console.log(current);
      }
      while (current.next !== null) {
        current = current.next;
        len++

        if (index == len) {
          console.log(`the value at node ${index} is ${current.value}`);
        }
      }
    }
  }

  secondToLast(index) {
    let current = this.list;
    let len = 1;

    if (current !== null) {
      if (index == 1) {
        return (current);
      }
      while (current.next !== null) {
        current = current.next;
        len++

        if (index == len) {
          return (current);
        }
      }
    }
  }

  pop() {

    let current = this.list;
    let len = 1;

    while (current.next !== null) {
      current = current.next;
      len++
    }
    let secondToLast = this.secondToLast(len - 1);

    secondToLast.next = null;

  }

  contains(value) {
    let current = this.list;
    let len = 1;


    if (len == 1) {
      if (current.value == value) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
    while (current.next !== null) {
      current = current.next;

      if (current.value == value) {
        console.log(true);
      } else {
        console.log(false)
      }
    }

  }

  find(value) {
    let current = this.list;
    let index = 1;


    if (value == current.value) {
      console.log(`the value: ${value} is at index: ${index}`);
    }

    while (current.next !== null) {
      current = current.next;
      index++
      if (current.value == value) {
        console.log(`the value: ${value} is at index: ${index}`)
      }

    }
  }

  toString() {
    let current = this.list;
    let index = 1;

    if (index == 1) {
      console.log(`value: ${current.value}`)
    }

    while (current.next !== null) {
      current = current.next;
      console.log(`value: ${current.value}`)

    }
  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


const linkList = new LinkList();

linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.append(5)
linkList.prepend(0)
linkList.pop()
linkList.pop()
linkList.append(15)
linkList.prepend(9)
linkList.toString()
linkList.size()

console.log(linkList.list.next.next.next)


//Hashmap

class HashMap {
  constructor() {
    this.map = new Map();
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % 13;
  }

  set(key, value) {
    this.map.set(key, value)
  }

  get(key) {
    console.log(this.map.get(key));
  }

  remove(key) {
    if (this.map.get(key) !== undefined) {
      console.log(true)
      this.map.delete(key)
    } else {
      console.log(false)
    }
  }

  clear() {
    this.map.clear();
  }

  has(key) {
    console.log(this.map.has(key));
  }

  length() {
    console.log(this.map.size);
  }

  keys() {
    const keys = this.map.keys();
    const length = this.map.size;
    const keyArr = [];

    for (let i = 0; i < length; i++) {

      keyArr.push(keys.next().value);
    }
    console.log(keyArr);

  }

  values() {
    const values = this.map.values();
    const length = this.map.size;
    const valueArr = [];

    for (let i = 0; i < length; i++) {

      valueArr.push(values.next().value);
    }
    console.log(valueArr);

  }

  entry() {
    const keys = this.map.keys();
    const values = this.map.values();
    const length = this.map.size;
    const entryArr = [];

    for (let j = 0; j < length; j++) {
      const pairArr = [];
      pairArr.push(keys.next().value);
      pairArr.push(values.next().value);
      entryArr.push(pairArr);
    }
    console.log(entryArr)

  }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');

test.get('apple');
test.entry();


//Binary Search Tree 


class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }
  sortArr() {
    this.array.sort((a, b) => {
      return a - b;
    });
    let newArr = [];
    this.array.forEach((element) => {
      if (!newArr.includes(element)) {
        newArr.push(element)
      }
    });
    this.array = newArr;
    console.log(newArr);
  }

  createNodes(arr, start, end) {
    if (start > end) {
      return;
    }
    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.createNodes(arr, start, mid - 1);
    node.right = this.createNodes(arr, mid + 1, end);

    return node;
  }

  buildTree() {
    this.sortArr();

    const n = this.array.length
    this.root = this.createNodes(this.array, 0, n - 1);

    console.log(this.root);

  }

  insert(value) {
    this.array.push(value);
    console.log(this.array)
  }

  delete(value) {
    const removeNode = function(node, value) {
      if (node == null || node == undefined) {
        return null;
      }
      if (value == node.data) {
        if (node.left == undefined && node.right == undefined) {
          return null;
        }
        if (node.left == undefined && node.right !== undefined) {
          return node.right;
        }
        if (node.right == undefined && node.left !== undefined) {
          return node.left;
        }
        if (node.right !== undefined && node.left !== undefined) {
          let tempNode = node.right;
          while (tempNode.left !== undefined) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
        }

      } else if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    }
    this.root = removeNode(this.root, value);
  }

  findMin() {
    let current = this.root;

    while (current.left !== undefined) {
      current = current.left;
    }
    console.log(current);
  }

  findMax() {
    let current = this.root;

    while (current.right !== undefined) {
      current = current.right;
    }
    console.log(current);
  }

  find(value) {
    let current = this.root;

    while (current.data !== value) {
      if (value < current.data) {
        current = current.left;
      } else if (value > current.data) {
        current = current.right;
      }
      if (current == null || current == undefined) {
        return null;
      }
    }
    console.log(current);
  }

  levelOrder() {
    const levelOrder = function(root) {
      if (root == null) {
        return;
      }
      let resArr = [];
      let queuArr = [root];

      while (queuArr.length) {
        let levelArr = [];
        let levelSize = queuArr.length;
        while (levelSize) {
          let current = queuArr.shift();

          if (current.left) {
            queuArr.push(current.left);
          }
          if (current.right) {
            queuArr.push(current.right);
          }

          levelArr.push(current.data);
          levelSize--;
        }
        resArr.push(levelArr);
      }
      console.log(resArr);
    }
    levelOrder(this.root);
  }

  inOrder() {
    let resArr = [];
    inOrder(this.root);

    function inOrder(root) {
      if (root == null) {
        return;
      }
      inOrder(root.left);
      resArr.push(root.data);
      inOrder(root.right);

    }
    console.log(resArr);


  }

  preOrder() {
    let resArr = [];
    preOrder(this.root);

    function preOrder(root) {
      if (root == null) {
        return;
      }
      resArr.push(root.data);
      preOrder(root.left);
      preOrder(root.right);

    }
    console.log(resArr);

  }

  postOrder() {
    let resArr = [];
    postOrder(this.root);

    function postOrder(root) {
      if (root == null) {
        return;
      }
      postOrder(root.left);
      postOrder(root.right);
      resArr.push(root.data);

    }
    console.log(resArr);
  }

  height(node) {
    if (node == null || node == undefined) {
      return -1;
    }

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);


    let answer = Math.max(leftHeight, rightHeight) + 1;

    return answer;
  }

  depth(value) {
    let current = this.root;
    let depthNum = 0;

    while (current.data !== value) {
      depthNum++;
      if (value < current.data) {
        current = current.left;
      } else if (value > current.data) {
        current = current.right;
      }
      if (current == null || current == undefined) {
        return null;
      }
    }

    console.log(`the depth of this node is: ${depthNum}`);
  }

  isBalanced() {
    if((this.height(this.root.left))-(this.height(this.root.right)) ==0 ||
      (this.height(this.root.left))-(this.height(this.root.right)) ==1 ||
      (this.height(this.root.left))-(this.height(this.root.right)) ==-1) {
      console.log('this tree is balanced');
      } else {
      console.log('this tree is NOT balanced');
      }
  }


}

const tree = new Tree([1, 3, 5, 6, 3, 15, 6, 1, 2, 3, 6, 8, 42, 5, 25, 45, 6, 4]);




tree.insert(4);
tree.insert(9);
tree.buildTree();
tree.findMin();
tree.findMax();


tree.delete(25);
tree.find(25);


console.log(tree.root);
tree.levelOrder();

tree.inOrder();
tree.preOrder();
tree.postOrder();
console.log(`the height of this node is: ${tree.height(tree.root)}`);
tree.depth(5);
tree.isBalanced();