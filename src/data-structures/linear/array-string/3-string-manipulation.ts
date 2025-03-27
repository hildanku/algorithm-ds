const text: string = 'Hello World'

const words = text.split(' ') // to split text to array
const joined = words.join('-') // to join dash (-) into array
const sub = text.substring(0, 5); // to extract first 5 letter 
const char = text.charAt(1); // to extract character at index 1

const upper = text.toUpperCase() // to make text uppercase
const lower = text.toLowerCase() // to make text toLowerCase

const space = '   Hello World   '
const clean = space.trim() // to clean text from whitespace
const replace = space.replace(' ', '=')
const replaceAll = space.replaceAll(' ', '=')


/*
 * Output is always boolean
 * includes is to check whether the string is in text?
 * startsWith is used to check whether the string exists and is at the beginning of the string?
 * endsWith is antonim from startsWith
 */
const isT = text.includes('Hello')
const isWhiteSpace = text.startsWith('')
const isZ = text.endsWith(' ')

const checkIndex = text.indexOf('H')
const checkLastIndex = text.lastIndexOf('H')

const reverse = words.reverse() // to reverse a string

const phoneNumber = '083189028312'
const first = phoneNumber.slice(0, 4)
const maskPhoneNumber = first.padEnd(phoneNumber.length, '*')

console.log(words,
    joined,
    sub,
    char,
    upper,
    lower,
    clean,
    replace,
    replaceAll,
    isT,
    isWhiteSpace,
    isZ,
    checkIndex,
    checkLastIndex,
    reverse,
    maskPhoneNumber
)
