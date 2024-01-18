import $header from "../header"
import { $form } from "../forms"
import { createPortal } from "react-dom"
import { JSXElementConstructor, useEffect, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store"
import { loginForm, registerForm } from "../../constants/forms"
import { login, register } from "../../store/slice/account.slice"

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
    const { user, error, loading } = useAppSelector(state => state.account)

    useEffect(() => {
        if (user && /(login|register)$/.test(hash)) nav(pathname, { replace: true })
    }, [hash, user])

    const components: ComponentObjectType = ({
        login: {
            component: $form,
            props: {
                ...loginForm,
                onSubmit: (data: Partial<UserType>) => dispatch(login(data))
            },
        },
        register: {
            component: $form,
            props: {
                ...registerForm,
                onSubmit: (data: Partial<UserType>) => dispatch(register(data))
            },
        },
    })

    const handleClosePortal = () => nav(pathname, { replace: true })

    const form = useMemo(() => components[hash.slice(1)], [hash])

    return <>
        <$header />
        <main className="grow flex flex-col items-center w-full">
            <$component />
        </main>
        {createPortal(form && <form.component
            error={error}
            loading={loading}
            {...form.props as any}
            onClose={handleClosePortal}
        />, document.querySelector<HTMLDivElement>('#portal')!)}
    </>
}
