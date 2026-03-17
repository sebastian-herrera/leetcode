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

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const dfs = (node: TreeNode | null, cur: number): boolean => {
    if (!node) return false;

    if (node.left === null && node.right === null) return node.val + cur === targetSum;

    cur += node.val;
    let l: boolean = dfs(node.left, cur);
    let r: boolean = dfs(node.right, cur);

    return l || r;
  };

  return dfs(root, 0);
}

// // iterative way
// export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   if (!root) return false;

//   const stack: [TreeNode, number][] = [[root, 0]];

//   while (stack.length) {
//     let [node, cur] = stack.pop()!;

//     if (node.left === null && node.right === null) {
//       if (node.val + cur === targetSum) return true;
//     }

//     cur += node.val;
//     if (node.left) stack.push([node.left, cur]);
//     if (node.right) stack.push([node.right, cur]);
//   }

//   return false;
// }
