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

export function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0; // required just for type; the problem constraints guarantee a minimum of two nodes

  const dfs = (node: TreeNode | null, max: number, min: number): number => {
    if (!node) return max - min;

    if (node.val > max) max = node.val;
    if (node.val < min) min = node.val;

    const l = dfs(node.left, max, min);
    const r = dfs(node.right, max, min);

    return Math.max(l, r);
  };

  return dfs(root, root.val, root.val);
}
