import { phoneBook } from "../constants/media"

export default () => {
    return <section className="pt-16 md:pt-0 h-full lg:h-screen flex flex-wrap bg-main bg-cover relative before:absolute before:bottom-0 before:left-[40%] before:h-full before:md:h-[initial] before:md:w-full before:aspect-square before:rounded-full before:shadow-xl before:backdrop-blur">
        <div className="z-10 grow basis-80 flex items-center justify-center text-white p-[5%] flex-col gap-4">
            <h2 className="text-xl w-5/6 md:w-full md:text-4xl font-semibold shadow-2xl text-center md:text-left"><i className="text-purple-600 underline">Welcome</i> to Muhamamd Inuwa's Online Phone Book Record</h2>
            <p className="text-center text-sm md:text-base md:text-left">
                Welcome to Muhamamd Inuwa's Phone Book Hub, your hassle-free destination for quick and accurate contact information. Find friends, family, and business contacts easily with our user-friendly platform. Your go-to source for streamlined connections!
            </p>
        </div>
        <div className="z-10 grow basis-80 flex items-center justify-center">
            <img src={phoneBook} alt="" className="w-4/6 h-4/6 object-contain" />
        </div>
    </section>
}