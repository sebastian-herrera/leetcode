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

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let curLevel = [root];

  const ans: number[][] = [[root.val]];

  while (curLevel.length) {
    const curNodes = curLevel.length;
    const nextLevel: TreeNode[] = [];

    for (let i = 0; i < curNodes; i++) {
      const node = curLevel[i];

      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    const isOdd = ans.length % 2;
    const temp = nextLevel.map(node => node.val);

    if (nextLevel.length) ans.push(isOdd ? temp.reverse() : temp);
    curLevel = nextLevel;
  }

  return ans;
}
