import { IoSearchSharp } from "react-icons/io5"
import { useSearch } from "../../store/context/search.context"

export default () => {
    const { q, setQ } = useSearch()
    return <form className="grow h-full p-2 px-4 border border-slate-600 rounded hidden md:flex items-center gap-2 md:max-w-[70%] bg-white bg-opacity-20 focus-within:bg-black">
        <IoSearchSharp className="text-gray-500" />
        <input type="search" value={q} placeholder="Search by names or phone number" className="bg-transparent w-full h-full px-4 outline-none text-white" onChange={e => setQ(e.currentTarget.value)} />
    </form>
}
