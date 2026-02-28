export function isValid(s: string): boolean {
  const matching: Record<string, string> = { '(': ')', '{': '}', '[': ']' };
  let stack = [];

  for (const c of s) {
    if (matching[c]) stack.push(matching[c]);
    else if (stack.pop() !== c) return false;
  }

  return !stack.length;
}
