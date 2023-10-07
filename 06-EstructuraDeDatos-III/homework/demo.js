function BinarySearchTree (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
    
    if(value < this.value) {

        if(this.left) {
            this.left.insert(value);
        } else {
            this.left = new BinarySearchTree(value)
            return value;
        } 
    } else {

        if(this.right) {
            this.right.insert(value);
        } else {
            this.right = new BinarySearchTree(value);   
            return value;         
        }
    }
    
};

BinarySearchTree.prototype.imprimirOrdenado = function() {

    // if(this.value)

}


let newTree = new BinarySearchTree(8);
newTree.insert(10);
newTree.insert(5);

// newTree.imprimirOrdenado();