export function removeDuplicates(s: string): string {
  let stack: string[] = [];

  for (const c of s) {
    const last = stack[stack.length - 1];

    if (last !== c) stack.push(c);
    else stack.pop();
  }

  return stack.join('');
}
