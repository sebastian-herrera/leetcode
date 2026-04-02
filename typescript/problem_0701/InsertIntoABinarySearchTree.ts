import { TreeNode } from '../common';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);

  if (root.val > val) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);

  return root;
}

// iterative
// export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (!root) return new TreeNode(val);

//   let cur = root;

//   while (true) {
//     if (cur.val > val) {
//       if (!cur.left) {
//         cur.left = new TreeNode(val);
//         break;
//       }
//       cur = cur.left;
//     } else {
//       if (!cur.right) {
//         cur.right = new TreeNode(val);
//         break;
//       }
//       cur = cur.right;
//     }
//   }

//   return root;
// }
