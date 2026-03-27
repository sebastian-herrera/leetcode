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

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    const l = dfs(node.left);
    const r = dfs(node.right);

    const diameter = l + r;
    if (diameter > maxDiameter) maxDiameter = diameter;

    return Math.max(l, r) + 1;
  };

  dfs(root);
  return maxDiameter;
}
