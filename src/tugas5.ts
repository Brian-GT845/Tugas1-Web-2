function angryProfessor(k: number, a: number[]): string {
  // Hitung jumlah siswa yang datang tepat waktu (waktu kedatangan <= 0)
  const onTimeStudents = a.filter((time) => time <= 0).length;

  // Jika jumlah siswa yang tepat waktu kurang dari batas minimum, kelas dibatalkan
  return onTimeStudents >= k ? "NO" : "YES";
}

// Baca input dan proses beberapa kasus uji
function processInput(input: string): string[] {
  const lines = input.trim().split("\n");
  const t = parseInt(lines[0]); // Jumlah kasus uji
  let currentLine = 1;
  const results: string[] = [];

  // Proses setiap kasus uji
  for (let i = 0; i < t; i++) {
    const [n, k] = lines[currentLine].split(" ").map(Number);
    const arrivalTimes = lines[currentLine + 1].split(" ").map(Number);
    results.push(angryProfessor(k, arrivalTimes));
    currentLine += 2;
  }

  return results;
}

// Contoh input
const sampleInput = `2
  4 3
  -1 -3 4 2
  4 2
  0 -1 2 1`;

// Proses input dan tampilkan hasil
const results = processInput(sampleInput);

// Tampilkan hasil
results.forEach((result) => console.log(result));
