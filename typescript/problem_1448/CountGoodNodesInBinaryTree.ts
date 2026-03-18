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

export function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const dfs = (node: TreeNode | null, maxSoFar: number): number => {
    if (!node) return 0;

    const isGood = node.val >= maxSoFar;
    const max = isGood ? node.val : maxSoFar;

    let l = dfs(node.left, max);
    let r = dfs(node.right, max);

    return l + r + (isGood ? 1 : 0);
  };

  return dfs(root, root.val);
}
