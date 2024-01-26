export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    password_h: string,
    salt: string
}