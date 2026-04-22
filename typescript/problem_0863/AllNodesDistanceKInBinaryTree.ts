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

export function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  const parents = new Map<number, TreeNode | null>();

  const dfs = (node: TreeNode | null, parent: TreeNode | null) => {
    if (!node) return;

    parents.set(node.val, parent);
    dfs(node.left, node);
    dfs(node.right, node);
  };

  dfs(root, null);
  const q = new Queue([target]);
  const seen = new Set([target?.val]);
  let distance = 0;

  while (!q.isEmpty() && distance < k) {
    const currLength = q.size();

    for (let i = 0; i < currLength; i++) {
      const node = q.pop()!;
      const neighbors = [node.left, node.right, parents.get(node.val)];

      for (const neighbor of neighbors) {
        if (neighbor && !seen.has(neighbor.val)) {
          seen.add(neighbor.val);
          q.push(neighbor);
        }
      }
    }

    distance++;
  }

  const ans: number[] = [];
  while (!q.isEmpty()) {
    const node = q.pop()!;
    ans.push(node.val);
  }

  return ans;
}
