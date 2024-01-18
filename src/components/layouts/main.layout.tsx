import { JSXElementConstructor } from "react"

export default ($component: JSXElementConstructor<any>) => () => {
    return <>
        <$component />
    </>
}
