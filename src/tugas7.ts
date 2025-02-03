function plusMinus(arr: number[]): void {
  // Inisialisasi penghitung
  let positives: number = 0;
  let negatives: number = 0;
  let zeros: number = 0;

  // Menghitung jumlah masing-masing angka
  for (let num of arr) {
    if (num > 0) positives++;
    else if (num < 0) negatives++;
    else zeros++;
  }

  // Menghitung rasio dan mencetak dengan 6 angka desimal
  const total = arr.length;
  console.log((positives / total).toFixed(6));
  console.log((negatives / total).toFixed(6));
  console.log((zeros / total).toFixed(6));
}

// Menguji fungsi dengan contoh input
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
