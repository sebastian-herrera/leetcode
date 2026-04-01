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

export function getMinimumDifference(root: TreeNode | null): number {
  const values: number[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) return;

    dfs(node.left);
    values.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  let ans = Infinity;
  for (let i = 1; i < values.length; i++) {
    ans = Math.min(ans, values[i] - values[i - 1]);
  }

  return ans;
}
