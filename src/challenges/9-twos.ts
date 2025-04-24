function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i != j) {
                let sum = nums[i] + nums[j]
                if (sum == target) {
                    return [i, j]
                }
            }
        }
    }
    return [0, 0]
}


const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },  // Case umum
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },       // Ada solusi di tengah
    { nums: [3, 3], target: 6, expected: [0, 1] },          // Duplikat angka
    { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] }, // Angka negatif
    { nums: [1000000000, 2999999999, 1000000000], target: 3999999999, expected: [1, 2] }, // Angka besar
    { nums: [], target: 5, expected: "Error" },             // Edge case: Array kosong
    { nums: [5], target: 5, expected: "Error" },            // Edge case: Satu elemen
];

testCases.forEach(({ nums, target, expected }) => {
    try {
        const result = twoSum(nums, target);
        console.log(`nums: ${JSON.stringify(nums)}, target: ${target} → ${JSON.stringify(result)}`);
    } catch {
        console.log(`nums: ${JSON.stringify(nums)}, target: ${target} → Error`);
    }
});
