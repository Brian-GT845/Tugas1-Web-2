function birthdayCakeCandles(candles: number[]): number {
  // Mencari tinggi maksimum
  const maxHeight = Math.max(...candles);

  // Menghitung berapa banyak lilin yang memiliki tinggi maksimum
  const count = candles.filter((candle) => candle === maxHeight).length;

  return count;
}

const testCase = [3, 2, 1, 3];
console.log("\nKasus Uji:");
console.log("Masukan:", testCase);
console.log("Keluaran:", birthdayCakeCandles(testCase));
