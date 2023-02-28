/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 // recursive solution
 var searchBST = function(root, val) {
    if(!root) return null;
    
    if(root.val>val){
        return searchBST(root.left, val);
    }else if(root.val<val){
        return searchBST(root.right, val);
    }else{
        return root;
    }
};

/**
 * Time Complexity - O(log(n))
 * Space Complexity - O(n)
 */

// -----------------------------------------------------------------------------------------------------------------------