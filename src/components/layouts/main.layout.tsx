import $header from "../header"
import { JSXElementConstructor } from "react"

export default ($component: JSXElementConstructor<any>) => () => {
    return <>
        <$header />
        <main className="grow flex flex-col items-center w-full">
            <$component />
        </main>
    </>
}
