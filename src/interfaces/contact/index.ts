export interface IContactRequest {
    name: string,
    email: string,
    cellphone: string,
}

export interface IContactUpdateRequest {
    name?: string,
    email?: string,
    cellphone?: string,
}