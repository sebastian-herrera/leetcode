export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const lookup = new Map();

  for (let i = 0; i < nums1.length; i++) {
    lookup.set(nums1[i], i);
  }

  const monotonicStack: number[] = [],
    ans = new Array(nums1.length).fill(-1);

  for (let i = 0; i < nums2.length; i++) {
    if (!lookup.size) break;

    const num = nums2[i];

    while (monotonicStack.length && num > monotonicStack[monotonicStack.length - 1]) {
      ans[lookup.get(monotonicStack[monotonicStack.length - 1])] = num;
      lookup.delete(monotonicStack[monotonicStack.length - 1]);
      monotonicStack.pop();
    }

    if (lookup.has(num)) monotonicStack.push(num);
  }

  return ans;
}
