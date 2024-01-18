/// <reference types="vite/client" />

declare type StateType<T extends object, E extends object> = E & {
    data: T[]
    item?: null | T
    loading: boolean
    error: string | boolean
}