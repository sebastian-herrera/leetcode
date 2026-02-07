// %%

// declaro total
// luego sobre esto trabajo en el mismo array y voy reemplando los numeros
// asi cuando este en la posicion 1, no abre perdido cuando era el total

export function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i -1]
  }

  return nums;
}
