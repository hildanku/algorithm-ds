function wordFreq(s: string): Record<string, number> {
    // convert all string to lowercase to avoid case sensitive
    const cleanWords = s.toLowerCase()

    //split string
    const words = cleanWords.trim().split(' ')

    console.log(words)

    let temp: Record<string, number> = {}

    for (const word of words) {
        if (word in temp) {
            temp[word]++
        } else {
            temp[word] = 1
        }
    }

    return temp

}

console.log(wordFreq('  HELLO hello world hello world hello'))
