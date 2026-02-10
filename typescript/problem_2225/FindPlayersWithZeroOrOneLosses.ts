// %%

// return size 2: `[[jugadores que no perdieron ninguna partida],  [perdieron exactamente una partida]]`
// cada retunr[i] debe estar en orden incremental
//
// condiciones:
// - `answer[0]` is a list of all players that have **not** lost any matches.
// - `answer[1]` is a list of all players that have lost exactly **one** match.

// my approach
// export function findWinners(matches: number[][]): number[][] {
//   // set para los que no pierden ninguna match, no hace falta contador
//   // hash para el loser, porque solo puede perder una vez
//   //
//   // solo hace falta el losers porque de esta forma puede ver quien no perdio nada y quien exactamente una
//   //
//   // condicional para ver si el winner ya esta en loser

//   const winners = new Set();
//   const losers = new Map();
//   const ans: number[][] = [[], []];

//   for (const [winner, loser] of matches) {
//     // console.log({ winner, loser });

//     if (!losers.get(winner)) losers.set(winner, 0);
//     losers.set(loser, (losers.get(loser) || 0) + 1);
//   }

//   // console.log(losers);

//   for (const [player, frequency] of losers) {
//     if (frequency > 1) continue;

//     const place = frequency === 0 ? ans[0] : ans[1];
//     place.push(player);
//   }

//   ans[0].sort((a, b) => a - b);
//   ans[1].sort((a, b) => a - b);

//   return ans;
// }

// approach 4
//
// 0=never played
// 1=never loses
// 2=1 lost
// 3=2+ loses
export function findWinners(matches: number[][]): number[][] {
  const lossesCount = new Int8Array(10 ** 5 + 1);
  let maxId = 0;

  for (let i = 0; i < matches.length; i++) {
    const winner = matches[i][0];
    if (lossesCount[winner] === 0) lossesCount[winner] = 1;

    const loser = matches[i][1];
    if (lossesCount[loser] < 2) lossesCount[loser] = 2;
    else if (lossesCount[loser] === 2) lossesCount[loser] = 3;

    if (winner > maxId) maxId = winner;
    if (loser > maxId) maxId = loser;
  }

  const ans: number[][] = [[], []];
  for (let player = 0; player <= maxId; player++) {
    const frequency = lossesCount[player];
    if (frequency === 0 || frequency === 3) continue;

    if (frequency === 2) {
      ans[1].push(player);
      continue;
    }

    ans[0].push(player);
  }

  return ans;
}

// [1, 2, 10],
// [4, 5, 7, 8],
findWinners([
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
]);
