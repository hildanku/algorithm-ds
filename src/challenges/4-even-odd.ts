function isEvenOdd(n: number): string {
    if (!Number.isInteger(n)) {
        return 'invalid'
    }
    if (n % 2 === 0) {
        return 'even'
    }
    return 'odd'
}

// ternary operator
function isEO(n: number): string {
    return n % 2 === 0 ? 'even' : 'odd'
}

const testCases = [
    2,    // Even
    7,    // Odd
    0,    // Even (boundary case)
    -4,   // Even (negative number)
    -9,   // Odd (negative number)
    1.5,  // Invalid input (not an integer)
    NaN,  // Invalid input (NaN)
    Infinity, // Invalid input (Infinity)
    -Infinity // Invalid input (-Infinity)
];
testCases.forEach(tc => console.log(`isEO ${tc}: ${isEO(tc)}`));
testCases.forEach(tc => console.log(`${tc}: ${isEvenOdd(tc)}`));
