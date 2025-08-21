function invert(root){
    if(!root){
        return null;
    }
    // swap left and right sub tree
    const left = root.left;
    root.left = invert(root.right);
    root.right = invert(left);

    return root;
}