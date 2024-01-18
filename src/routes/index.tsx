import routes from "./routes"
import { Suspense } from "react"
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default () => {
    return <Suspense fallback={null}>
        <BrowserRouter>
            <Routes children={routes.map(props => <Route key={props.path} {...props} />)} />
        </BrowserRouter>
    </Suspense>
}
