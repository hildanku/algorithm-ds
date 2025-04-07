/*
*
* growUpNumber
        Buatlah sebuah fungsi untuk perhitungan mundur dari sebuah angka yang diambil dari parameternya,
        outputnya harus berupa angka yang menghitung mundur sesuai dengan digit angka yang diberikan sampai dengan index ke 0,
        jadi buatlah sebuah fungsi untuk soal berikut ini dan outputnya harus mengembalikan sebuah Array seperti
        dibawah ini.
* Output
    growUpNumber(5) ➞ [5, 4, 3, 2, 1, 0]
    growUpNumber(3) ➞ [3, 2, 1, 0]
    growUpNumber(0) ➞ []
    */

function growUp(n: number): number[] {
    let i = n
    let result = []

    for (i; i >= 0; i--) {
        result.push(i)
    }
    return result
}

console.log(growUp(5))
