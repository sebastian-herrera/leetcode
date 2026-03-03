export function simplifyPath(path: string): string {
  const stack: string[] = [],
    paths = path.split('/');

  for (const c of paths) {
    if (c === '' || c === '.') continue;

    if (c === '..') {
      if (stack.length) stack.pop();
      continue;
    }

    stack.push(c);
  }

  return `/${stack.join('/')}`;
}
