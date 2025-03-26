interface parentUser {
    fatherName: string
    motherName: string
}

interface User {
    id: number
    name: string
    isStudent: boolean
    address?: string
    parent?: parentUser
}

const userA: User = {
    id: 0,
    name: 'Hildan K. Utomo',
    isStudent: true,
    address: 'CENTRAL JAVA',
    parent: {
        fatherName: 'X',
        motherName: 'Y'
    }
}

console.log(userA)
