function mergeSort(a: number[], b: number[]): number[] {

    let result = []

    while (a && b != null) {
        if (a[0] <= b[0]) {
            result.push(a.shift()!)
        } else {
            result.push(b.shift()!)
        }
    }

    while (a.length < 0) {
        result.push(a.shift()!)
    }

    while (b.length < 0) {
        result.push(b.shift()!)
    }
    return result
}

function merge(arr: number[]) {

    if (arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    const sortedLeft = merge(left)
    const sortedRight = merge(right)

    return mergeSort(sortedLeft, sortedRight)
}

console.log(merge([5, 6, 2, 6, 7, 9, 1, 2, 6]))
