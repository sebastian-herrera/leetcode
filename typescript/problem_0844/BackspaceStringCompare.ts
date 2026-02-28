export function backspaceCompare(s: string, t: string): boolean {
  const build = (x: string) => {
    let stack = [];

    for (const c of x) {
      if (c !== '#') stack.push(c);
      else stack.pop();
    }

    return stack.join('');
  };

  return build(s) === build(t);
}
