import $navbar from "../navbar"
import { $form } from "../forms"
import $sidebar from "../sidebar"
import { createPortal } from "react-dom"
import { JSXElementConstructor, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store"

type ComponentObjectType = {
    [key: string]: {
        component: typeof $form,
        props: object | FormPropType,
    }
}

export default ($component: JSXElementConstructor<any>) => () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const { hash, pathname } = useLocation()
    const { error, loading } = useAppSelector(state => state.contact)

    const components: ComponentObjectType = ({
        'create-contact': {
            props: {},
            component: $form,
        },
        'update-contact': {
            props: {},
            component: $form,
        },
    })

    const handleClosePortal = () => nav(pathname, { replace: true })

    const form = useMemo(() => components[hash.slice(1)], [hash])

    return <section className="w-screen h-screen flex overflow-hidden bg-black bg-main bg-cover before:inset-0 before:fixed before:bg-black before:bg-opacity-95">
        <$sidebar />
        <main className="grow z-10 flex flex-col p-4 px-8 gap-2 no-scrollbar">
            <$navbar />
            <div className="grow no-scrollbar overflow-auto">
                <$component />
            </div>
        </main>
        {createPortal(form && <form.component
            error={error}
            {...form.props}
            loading={loading}
            onClose={handleClosePortal}
        />, document.querySelector<HTMLDivElement>('#portal')!)}
    </section>
}
