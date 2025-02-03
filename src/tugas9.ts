function climbStairs(n: number): number {
  if (n === 1) return 1;

  // Inisialisasi array untuk menyimpan jumlah cara untuk setiap langkah
  let dp: number[] = new Array(n + 1).fill(0);

  // Base cases
  dp[1] = 1; // Hanya 1 cara untuk mencapai langkah 1
  dp[2] = 2; // Dua cara untuk mencapai langkah 2: 1+1 atau 2

  // Mengisi array dp untuk langkah-langkah selanjutnya
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
