import $input from "./group"
import { IoClose } from "react-icons/io5"
import { FormEventHandler, useState } from "react"

export default (props: FormPropType) => {
    const [data, setData] = useState<Record<string, any>>(props.data || {})

    const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
        ev.preventDefault()
        props.onSubmit?.(data)
    }

    return <form onSubmit={handleSubmit} className={`flex gap-5 flex-col items-center relative max-w-[90%] rounded p-4 px-6 bg-black bg-opacity-70 backdrop-blur ${props.wide ? 'lg:w-3/6' : 'lg:w-2/6'}`}>
        <IoClose className="absolute top-3 right-3 text-white text-xl cursor-pointer font-black" onClick={props.onClose as any} />
        <h2 className="capitalize text-center lg:text-2xl font-bold text-slate-400">{props.title}</h2>
        {props.error && <span className="text-red-400 -my-2 -mt-4 text-center">{props.error}</span>}

        <div className="flex flex-wrap gap-4">
            {props.inputs.map(input => <$input
                {...input} key={input.name}
                value={data[input.name] || ''}
                onChange={(val: any) => setData({ ...data, [input.name]: val })}
            />)}
        </div>

        <div className="w-full flex-none flex items-center justify-start">
            <button disabled={props.loading} style={{ fontVariant: 'small-caps' }} className='btn text-white text-sm flex items-center justify-center disabled:bg-gray-500 disabled:pointer-events-none'>
                {props.loading ? <div className='h-4 aspect-square rounded-full flex-none animate-spin border-r' /> : <span className='z-10'>{props.button}</span>}
            </button>
        </div>
    </form>
}
