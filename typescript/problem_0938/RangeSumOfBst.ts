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

// iterative
export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0;

  let ans = 0;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop()!;

    if (low <= node.val && node.val <= high) ans += node.val;

    if (node.left && low < node.val) stack.push(node.left);
    if (node.right && node.val < high) stack.push(node.right);
  }

  return ans;
}
