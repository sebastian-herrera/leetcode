export function makeGood(s: string): string {
  const stack: string[] = [];

  for (const c of s) {
    const lastIn = stack[stack.length - 1];

    if (lastIn && Math.abs(lastIn.charCodeAt(0) - c.charCodeAt(0)) === 32) stack.pop();
    else stack.push(c);
  }

  return stack.join('');
}
