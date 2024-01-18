/// <reference types="vite/client" />

declare type StateType<T extends object, E extends object = {}> = E & {
    data: T[]
    error: string
    item?: null | T
    loading: boolean
}

declare type ContactType = {
    id: number
    lastName: string
    firstName: string
    phoneNumber: string
}

declare type FormPropType = {
    title: string
    button: string
    error?: string
    wide?: boolean
    loading?: boolean
    onClose: Function
    inputs: InputType[]
    onSubmit?: Function
    links: { to: string, title: string }[]
}

declare type InputType = {
    type: any
    icon?: any
    name: string
    required: boolean
    placeholder: string
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
