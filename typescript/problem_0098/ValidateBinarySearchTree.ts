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

export function isValidBST(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, small: number, larger: number): boolean => {
    if (!node) return true;

    if (small >= node.val || node.val >= larger) return false;

    const l = dfs(node.left, small, node.val);
    const r = dfs(node.right, node.val, larger);

    return l && r;
  };

  return dfs(root, -Infinity, Infinity);
}
