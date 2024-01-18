export default (props: ContactType) => {
    return <div className="p-4 cursor-pointer rounded md:max-w-96 flex gap-4 overflow-hidden shadow bg-white bg-opacity-20 group relative before:top-0 before:left-0 before:absolute before:w-1 before:h-full before:transition-all before:bg-blue-400 hover:before:w-full">
        <div className="w-12 aspect-square flex items-center justify-center flex-none rounded-full bg-black text-white uppercase font-bold z-10 font-serif">{props.firstName[0] || '-'}{props.lastName[0] || '-'}</div>
        <div className="grow flex flex-col items-start leading-3 gap-1 z-10">
            <span className="text-white font-semibold capitalize">{props.firstName} {props.lastName}</span>
            <span className="text-gray-200 text-sm">{props.phoneNumber}</span>
        </div>
    </div>
}
