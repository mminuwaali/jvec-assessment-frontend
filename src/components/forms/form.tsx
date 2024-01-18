import { FormEventHandler } from "react"

export default (props: FormPropType) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
        ev.preventDefault()

    }
    return <form onSubmit={handleSubmit} className=""></form>
}
