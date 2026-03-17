import type { TreeNode } from '../common';

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

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let l = maxDepth(root.left);
  let r = maxDepth(root.right);

  return Math.max(l, r) + 1;
}

// // iterative way
// export function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;

//   const stack: [TreeNode, number][] = [[root, 1]];
//   let ans = 0;

//   while (stack.length) {
//     const [node, depth] = stack.pop()!;
//     ans = Math.max(ans, depth);

//     if (node.left) stack.push([node.left, depth + 1]);
//     if (node.right) stack.push([node.right, depth + 1]);
//   }

//   return ans;
// }
