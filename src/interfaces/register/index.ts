export interface IRegisterRequest {
    name: string,
    email: string,
    cellphone: string,
    password: string,
}

export interface IRegisterResponse extends IRegisterRequest {
    date_register?: string
}