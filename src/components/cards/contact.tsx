import { } from "react-icons/im"
import { useEffect } from "react"
import { FaTrash } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../store"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { deleteContact, getContact } from "../../store/slice/contact.slice"

export default (props: ContactType) => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const item = useAppSelector(state => state.contact.item)

    useEffect(() => {
        if (!item) nav(pathname, { replace: true })
    }, [item])

    return <div className="p-4 group cursor-pointer rounded md:max-w-96 flex gap-4 overflow-hidden shadow bg-white bg-opacity-20 group relative before:top-0 before:left-0 before:absolute before:w-1 before:h-full before:transition-all before:bg-blue-400 hover:before:w-full">
        <Link to="#update-contact" className="w-12 aspect-square flex items-center justify-center flex-none rounded-full bg-black text-white uppercase font-bold z-10 font-serif" onClick={() => dispatch(getContact(props.id))}>
            {props.firstName[0] || "-"}{props.lastName[0] || "-"}
        </Link>
        <Link to="#update-contact" className="grow flex flex-col items-start leading-3 gap-1 z-10" onClick={() => dispatch(getContact(props.id))}>
            <span className="text-white font-semibold capitalize">{props.firstName} {props.lastName}</span>
            <span className="text-gray-200 text-sm">{props.phoneNumber}</span>
        </Link>
        <div className="flex items-center justify-center overflow-hidden flex-none w-0 h-8 my-auto group-hover:w-8 group-hover:p-2 transition-all z-10 rounded-full hover:bg-black" onClick={() => dispatch(deleteContact(props.id))}>
            <FaTrash className="text-red-500" />
        </div>
    </div>
}
