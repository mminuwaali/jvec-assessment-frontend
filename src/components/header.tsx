import { url } from "../routes/routes"
import { Link } from "react-router-dom"
import { logo } from "../constants/media"
import { persistor, useAppSelector } from "../store"

export default () => {
    const user = useAppSelector(state => state.account.user)

    return <header style={{ fontVariant: 'small-caps' }} className="z-50 flex px-[4%] fixed top-5 w-5/6 md:w-4/5 lg:w-4/6 p-1 items-center justify-between rounded-full text-white bg-black bg-opacity-60 backdrop-blur-md shadow-md">
        <Link to={url('index')} className="transition-all hover:rotate-[720deg] duration-1000">
            <img src={logo} alt="" className="h-10" />
        </Link>
        <nav className="grow flex items-center justify-end gap-4">
            {user ? <>
                <Link to='/contact' className="hover:text-purple-600 transition-colors">contacts</Link>
                <Link to='#' onClick={persistor.purge} className="hover:text-purple-600 transition-colors">log out</Link>
            </> : <>
                <Link to='#login' className="hover:text-purple-600 transition-colors">log in</Link>
                <Link to='#register' className="bg-purple-600 px-5 pb-1 rounded-full">register</Link>
            </>}
        </nav>
    </header>
}
