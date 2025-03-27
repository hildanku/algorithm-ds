class Student {
    public name: string
    private identityNumber: number
    protected major: string

    constructor(name: string, identityNumber: number, major: string) {
        this.name = name
        this.identityNumber = identityNumber
        this.major = major
    }

    public getInformation() {
        console.log(this.name)
        console.log(this.major)
    }
}

class Graduate extends Student {
    private thesisTitle: string

    constructor(name: string, identityNumber: number, major: string, thesisTitle: string) {
        super(name, identityNumber, major)
        this.thesisTitle = thesisTitle
    }

    public getThesisInformation() {
        return `${this.name} is working on a thesis titled "${this.thesisTitle}" in ${this.major}`
    }
}

const gradStudent = new Graduate('Alice', 123456, 'Computer Science', 'AI for Cybersecurity')
console.log(gradStudent.getInformation())      // Alice is majoring in Computer Science
console.log(gradStudent.getThesisInformation()) // Alice is working on a thesis titled "AI for Cybersecurity" in Computer Science
// console.log(gradStudent.major) // Error because major is protected (only accessible in class and its subclasses)
