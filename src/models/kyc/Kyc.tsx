export interface Kyc {
    id: string
    firstName: string
    lastName: string
    otherName?: string
    nationality: string
    dateOfBirth: string
    createdAt: string
    updatedAt?: string
}

class Animal {
    private id: string;

    constructor(id: string) {
        this.id = id
    }
}