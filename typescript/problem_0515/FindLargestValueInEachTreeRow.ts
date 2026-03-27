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

export function largestValues(root: TreeNode | null): number[] {
  const ans: number[] = [];

  if (!root) return [];
  let queue = [root];

  while (queue.length) {
    const curLevelNodes = queue.length;
    const nextQueue = [];
    let curMax = queue[0].val;

    for (let i = 0; i < curLevelNodes; i++) {
      const node = queue[i];

      curMax = Math.max(curMax, node.val);

      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    ans.push(curMax);
    queue = nextQueue;
  }

  return ans;
}
