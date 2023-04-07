const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

// 前序遍历
function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return
  }

  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
  // 递归遍历左子树 
  preorder(root.left)
  // 递归遍历右子树  
  preorder(root.right)
}

// preorder(root);
//中序遍历
function inorder(root){
  if(!root){
    
  }
}