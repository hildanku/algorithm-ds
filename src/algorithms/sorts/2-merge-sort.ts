function mergeSort(a: number[], b: number[]): number[] {

    let result = []

    while (a.length > 0 && b.length > 0) {
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

    console.log("splitting", result)
    return result
}

function merge(arr: number[]) {

    if (arr.length <= 1) return arr

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    console.log('merge', left, right)
    //const sortedLeft = merge(left)
    //const sortedRight = merge(right)

    return mergeSort(left, right)
}

console.log(merge([5, 6, 2, 6, 7, 9, 1, 2, 6]))
