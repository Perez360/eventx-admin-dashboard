export interface UpdateUser {
    id: string;
    firstName: string;
    lastName: string;
    otherName?: string;
    email: string;
    password: string;
    role?: string;
}