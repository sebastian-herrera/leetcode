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
