import { Queue, type TreeNode } from '../common';

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

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const ans: number[][] = [];

  const q = new Queue([root]);

  while (!q.isEmpty()) {
    const isEven = ans.length % 2 === 0;

    const curSize = q.size();
    const nextLevel: number[] = Array(curSize);

    for (let i = 0; i < curSize; i++) {
      const node = q.pop()!;

      const idx = isEven ? i : curSize - i - 1;
      nextLevel[idx] = node.val;

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    if (nextLevel.length) ans.push(nextLevel);
  }

  return ans;
}
