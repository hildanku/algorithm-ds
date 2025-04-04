/*
* Bubblesort is comparatively simple.
* It works by comparing two adjacent elements 
* and swapping them if they are in the wrong order.
* looping first is length - 1, then loop inside is length - i - 1
*
*/

function bubbleSort(n: number[]): number[] {
    for (let i = 0; i < n.length - 1; i++) {
        for (let j = 0; j < n.length - i - 1; j++) {
            if (n[j] > n[j + 1]) {
                let temp = n[j]
                n[j] = n[j + 1]
                n[j + 1] = temp
            }
        }
    }
    return n
}

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
