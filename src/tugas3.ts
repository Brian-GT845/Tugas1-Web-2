function camelcase(s: string): number {
  // Jika string kosong, kembalikan nilai 0
  if (s.length === 0) return 0;

  // Hitung huruf kapital (yang menandakan kata baru) dan tambahkan 1 untuk kata pertama
  let wordCount = 1;

  for (let char of s) {
    if (char === char.toUpperCase()) {
      wordCount++;
    }
  }

  return wordCount;
}

console.log(camelcase("saveChangesInTheEditor"));
