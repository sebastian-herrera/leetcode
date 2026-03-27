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

export function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0;
  let curLevel = [root];

  while (true) {
    const nextLevel: TreeNode[] = [];

    for (const node of curLevel) {
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    if (!nextLevel.length) break;
    curLevel = nextLevel;
  }

  return curLevel.reduce((sum, node) => sum + node.val, 0);
}
