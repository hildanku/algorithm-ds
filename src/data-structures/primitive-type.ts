let age: number = 100 // this variable can only assign number
let name: string = 'happi' // this variable can only assign string
let isStudent: boolean = true // this variable can be true or false
// this variable can be assign anything value
let anything: any = 'bisa string / number / object'

// unknown type is better than any because it need to check the type of value
let unknownValue: unknown = 'ini bisa apa saja tapi harus dicek dulu sebelum digunakan'

// this variable can assign string or null value
let nullString: string | null = ''

// this is no type annotation, because no type annotation,
// typescript will infer myPet as string
let myPet = 'Chiko'
