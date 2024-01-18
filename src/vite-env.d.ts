/// <reference types="vite/client" />

declare type StateType<T extends object, E extends object={}> = E & {
    data: T[]
    item?: null | T
    loading: boolean
    error: string | boolean
}

declare type ContactType = {
    id: number
    lastName: string
    firstName: string
    phoneNumber: string
}

declare type UserType = {
    id: number
    email: string
    username: string
    lastName: string
    password?: string
    firstName: string
    phoneNumber: string
    profile: null | string
}
