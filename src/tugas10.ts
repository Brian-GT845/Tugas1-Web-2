function twoSum(nums: number[], target: number): number[] {
  // Membuat objek untuk menyimpan nilai dan indeksnya
  const numMap: { [key: number]: number } = {};

  // Iterasi melalui array nums
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Jika complement ada di numMap, kembalikan indeksnya
    if (complement in numMap) {
      return [numMap[complement], i];
    }

    // Simpan nilai dan indeksnya ke dalam numMap
    numMap[nums[i]] = i;
  }

  // Jika tidak ditemukan, kembalikan array kosong (sesuai dengan constraint, seharusnya tidak terjadi)
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
