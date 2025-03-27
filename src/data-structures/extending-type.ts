// this is simple usage, how to use extending type
interface Student {
    name: string
    isActive: boolean
}

// we can use multiple type, just do like this
// interface x extends y, z {
//
// }
interface StudentWithScholarship extends Student {
    scholarshipId: number
    period: number
}

function studentInformation(input: StudentWithScholarship) {
    console.log(input.name)
    console.log(input.period)
}

studentInformation({
    name: "Hildan",
    scholarshipId: 123,
    period: 6,
    isActive: true
})
