import { JSXElementConstructor } from "react"

export default ($component: JSXElementConstructor<any>) => () => {
    return <>
        <main className="grow flex flex-col items-center">
            <$component />
        </main>
    </>
}
