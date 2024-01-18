import { lazy } from "react"
import { RouteProps } from "react-router-dom"
import * as layout from '../components/layouts'

const pages = ({
    index: layout.main(lazy(() => import('../pages'))),
    contact: layout.main(lazy(() => import('../pages'))),
})

const routes: (RouteProps & { name: string })[] = [
    { name: 'index', path: '/', element: <pages.index /> },
    { name: 'contact-index', path: '/contact', element: <pages.contact /> },
]

export default routes
export const url = (name: string, opt: { [key: string]: any } = {}) => {
    let route = routes.find(item => item.name == name)?.path ?? name

    Object.entries(opt).forEach(([key, val]) => route = route.replace(`:${key}`, val))
    return route
}
