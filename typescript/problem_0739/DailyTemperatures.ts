export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [],
    ans = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];

    while (stack.length && t > temperatures[stack[stack.length - 1]]) {
      ans[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }

    stack.push(i);
  }

  return ans;
}
