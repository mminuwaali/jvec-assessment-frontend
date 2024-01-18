import $search from './forms/search'
import { useAppSelector } from "../store"
import { FaCircleUser } from "react-icons/fa6"

export default () => {
    const length = useAppSelector(state => state.contact.data.length)

    return <header className="w-full flex p-2 border-b border-b-slate-600 gap-8 justify-between items-center">
        <span className="text-white font-semibold" style={{ fontVariant: 'small-caps' }}>
            contacts: {length}
        </span>
        <$search />
        <nav className="h-full flex items-center justify-center">
            <FaCircleUser className='text-blue-500 w-6 h-6 flex-none cursor-pointer' />
        </nav>
    </header>
}
