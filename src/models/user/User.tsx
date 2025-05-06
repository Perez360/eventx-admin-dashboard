import { Status } from "@enums/Status"

export interface User {
    id: string
    firstName: string
    lastName: string
    otherName?: string
    email: string
    password: string
    status: Status
    role?: string
    createdAt: string
    updatedAt?: string
}