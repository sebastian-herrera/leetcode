// %%

export function checkIfPangram(sentence: string): boolean {
  if (sentence.length < 26) return false;

  const seen = new Array(26).fill(false);
  let sum = 0;

  for (let currChar of sentence) {
    const index = currChar.charCodeAt(0) - 'a'.charCodeAt(0);
    console.log(index);

    if (!seen[index]) {
      seen[index] = true;
      sum += 1;
    }

    if (sum === 26) break;
  }

  if (sum === 26) return true;
  return false;
}

checkIfPangram('thequickbrownfoxjumpsoverthelazydog');
