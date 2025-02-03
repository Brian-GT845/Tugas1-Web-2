function isPalindrome(x: number): boolean {
  // Bilangan negatif bukan palindrome
  if (x < 0) return false;

  // Mengubah angka menjadi string
  const numStr = x.toString();

  // Membandingkan karakter dari awal dan akhir
  let left = 0;
  let right = numStr.length - 1;

  while (left < right) {
    if (numStr[left] !== numStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Kasus pengujian
console.log("Contoh 1:");
console.log("Input: x =", 121);
console.log("Output:", isPalindrome(121));
console.log(
  "Penjelasan: 121 terbaca sebagai 121 dari kiri ke kanan dan dari kanan ke kiri."
);
console.log();

console.log("Contoh 2:");
console.log("Input: x =", -121);
console.log("Output:", isPalindrome(-121));
console.log(
  "Penjelasan: Dari kiri ke kanan, terbaca -121. Dari kanan ke kiri, menjadi 121-. Jadi bukan palindrome."
);
console.log();

console.log("Contoh 3:");
console.log("Input: x =", 10);
console.log("Output:", isPalindrome(10));
console.log(
  "Penjelasan: Terbaca 01 dari kanan ke kiri. Jadi bukan palindrome."
);
