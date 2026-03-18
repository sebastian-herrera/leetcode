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

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;

  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  const l = isSameTree(p.left, q.left);
  const r = isSameTree(p.right, q.right);

  return l && r;
}

// // iterative way
// export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   const stack: [TreeNode | null, TreeNode | null][] = [[p, q]];

//   while (stack.length) {
//     const [nodeP, nodeQ] = stack.pop()!;

//     if (nodeP === null && nodeQ === null) continue;

//     if (nodeP === null || nodeQ === null) return false;
//     if (nodeP.val !== nodeQ.val) return false;

//     stack.push([nodeP.left, nodeQ.left]);
//     stack.push([nodeP.right, nodeQ.right]);
//   }

//   return true;
// }
