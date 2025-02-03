function staircase(n: number): void {
  // Melakukan perulangan untuk setiap baris
  for (let i = 1; i <= n; i++) {
    // Menghitung jumlah spasi dan tanda pagar yang dibutuhkan
    const spaces = n - i;
    const hashes = i;

    // Membuat baris dengan menggabungkan spasi dan tanda pagar
    const line = " ".repeat(spaces) + "#".repeat(hashes);

    // Mencetak baris
    console.log(line);
  }
}

staircase(6);
