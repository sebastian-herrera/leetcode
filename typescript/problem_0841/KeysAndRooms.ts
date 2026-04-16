export function canVisitAllRooms(rooms: number[][]): boolean {
  const dfs = (node: number): void => {
    for (const neighbor of rooms[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        dfs(neighbor);
      }
    }
  };

  const seen = new Set([0]);
  dfs(0);

  return seen.size === rooms.length;
}

// iterative
// export function canVisitAllRooms(rooms: number[][]): boolean {
//   const stack = [0];
//   const seen = new Set([0]);

//   while (stack.length) {
//     const node = stack.pop()!;

//     for (const neighbor of rooms[node]) {
//       if (!seen.has(neighbor)) {
//         seen.add(neighbor);
//         stack.push(neighbor);
//       }
//     }
//   }

//   return seen.size === rooms.length;
// }
