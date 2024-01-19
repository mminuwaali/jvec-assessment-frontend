import { logo } from "../constants/media"

export default () => {
    return <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="w-32 aspect-square flex items-center justify-center p-6 rounded-full shadow-2xl md:animate-pulse bg-gray-300 animate-bounce">
            <img src={logo} alt="" className="" />
        </div>
    </div>
}