import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6"
import { logo } from "../constants/media"
import { MdLogout } from "react-icons/md"
import { persistor, useAppSelector } from "../store"

export default () => {
    const user = useAppSelector(state => state.account.user)

    return <aside className="z-10 gap-6 text-white w-14 md:w-52 h-full flex flex-col flex-none p-2 py-4 pb-10 md:p-4 relative before:absolute before:w-[.05rem] before:h-[90%] before:right-0 before:bg-slate-700 before:top-1/2 before:-translate-y-1/2">
        <span className="w-full gap-2 flex items-center justify-center md:justify-start lowercase" style={{ fontVariant: 'small-caps' }}>
            <img src={logo} alt="" className="h-8" />
            <span className="hidden md:flex">{user?.username || '__________'}</span>
        </span>
        <nav className="grow flex flex-col justify-end gap-1">
            <Link to='#new-contact' className="p-2 rounded w-full flex items-center justify-center md:justify-start gap-2 bg-blue-500 text-white font-semibold outline-none">
                <FaPlus className="" />
                <span className="hidden md:flex whitespace-nowrap lowercase" style={{ fontVariant: 'small-caps' }}>new contact</span>
            </Link>
        </nav>
        <Link to='#' onClick={persistor.purge} className="p-2 rounded w-full flex items-center justify-center md:justify-start gap-2 text-red-500 font-semibold outline-none">
            <MdLogout className="text-red-500" />
            <span className="hidden md:flex whitespace-nowrap lowercase" style={{ fontVariant: 'small-caps' }}>log out</span>
        </Link>
    </aside>
}
