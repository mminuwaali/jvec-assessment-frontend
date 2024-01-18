import $header from "../header"
import { $form } from "../forms"
import { createPortal } from "react-dom"
import { JSXElementConstructor, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type ComponentObjectType = {
    [key: string]: {
        component: typeof $form,
        props: object | FormPropType,
    }
}

export default ($component: JSXElementConstructor<any>) => () => {
    const nav = useNavigate()
    const { hash, pathname } = useLocation()

    const handleClosePortal = () => nav(pathname, { replace: true })

    const components: ComponentObjectType = ({
        login: { props: {}, component: $form },
        register: { props: {}, component: $form },
    })

    const form = useMemo(() => components[hash.slice(1)], [hash]);

    return <>
        <$header />
        <main className="grow flex flex-col items-center w-full">
            <$component />
        </main>
        {createPortal(form && <form.component {...form.props} onClose={handleClosePortal} />, document.querySelector<HTMLDivElement>('#portal')!)}
    </>
}
