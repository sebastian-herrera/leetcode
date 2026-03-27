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

export function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];

  if (!root) return [];
  let queue = [root];

  while (queue.length) {
    const nodesInCurLevel = queue.length;
    const nextQueue: TreeNode[] = [];

    ans.push(queue[queue.length - 1].val);

    for (let i = 0; i < nodesInCurLevel; i++) {
      const node: TreeNode = queue[i];

      if (node?.left) nextQueue.push(node.left);
      if (node?.right) nextQueue.push(node.right);
    }

    queue = nextQueue;
  }

  return ans;
}
