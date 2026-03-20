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

//  iterative way
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const stack: [TreeNode | null, number][] = [[root, 1]];
  let ans = Infinity;

  while (stack.length) {
    const [node, depth] = stack.pop()!;

    if (!node) continue;

    if (node.left === null && node.right === null) {
      ans = Math.min(ans, depth);
      continue;
    }

    stack.push([node.left, depth + 1]);
    stack.push([node.right, depth + 1]);
  }

  return ans;
}
