import axios from "axios"
import { formatNestError } from "./error"

export const baseURL = "http://localhost:3000/api"
// export const baseURL = "https://jvec-solution-backend.onrender.com/api"

const api = axios.create({ baseURL })

api.interceptors.response.use(({ data }) => data, err => { throw new Error(formatNestError(err)) })
api.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
})

export default api
