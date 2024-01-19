import routes from "./routes"
import { Suspense } from "react"
import $loader from '../components/loader'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default () => {
    return <Suspense fallback={<$loader />}>
        <BrowserRouter>
            <Routes children={routes.map(props => <Route key={props.path} {...props} />)} />
        </BrowserRouter>
    </Suspense>
}
