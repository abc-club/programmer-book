let nodes = [8,3,6,4,9,11,2,5,7];

class BinaryTree {
  constructor(nodes) {
    this.root = null
    this.insertBulk(nodes)
  }

  insert(value, current) {
    let node = new BinaryNode(null, value, null)
    if (!current) {
      current = this.root
    }

    if (value <= current.node) {
      if (current.left) {
        current = current.left
        this.insert(value, current)
      } else {
        current.left = node
      }
    } else {
      if (current.right) {
        current = current.right
        this.insert(value, current)
      } else {
        current.right = node
      }
    }
  }

  insertBulk(nodes) {
    for(var key in nodes) {
      if (!this.root) this.root = new BinaryNode(null, nodes[key], null)
      else this.insert(nodes[key])
    }
  }

  inOrderTravesel() {

  }
}

function BinaryNode(left, node, right) {
  this.left = left
  this.node = node
  this.right = right
}

let bt = new BinaryTree(nodes)