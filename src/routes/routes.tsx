import { lazy } from "react"
import { RouteProps } from "react-router-dom"
import * as layout from '../components/layouts'

const pages = ({
    index: layout.main(lazy(() => import('../pages'))),
    contact: layout.main(lazy(() => import('../pages'))),
})

const routes: RouteProps[] = [
    { path: '', element: <pages.index /> },
    { path: '/contact', element: <pages.contact /> },
]

export default routes
